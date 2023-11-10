public class locationdetails {
    public static String getstatedetails(String pincode){
        String endpointurl = 'https://api.postalpincode.in/pincode/'+pincode;
        
        
        //http object...
        Http http = new Http();
        
        
        //HTTP REQUEST...
        Httprequest req = new Httprequest();
        req.setEndpoint(endpointurl);
        req.setMethod('GET');
        
        
        Httpresponse res = http.send(req);
        
        
            //string responseJSON = res.getBody();
            //list<Object> objlist = (list<Object>) JSON.deserializeUntyped(responseJSON);
        	Map<String, Object> objlist = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
            system.debug('results :----------->' +objlist);
       		 String postOfficeName = String.valueOf(objlist.get('State'));
            system.debug('postoffice name ---- >' + postOfficeName);
             return postOfficeName;
        
    }

}