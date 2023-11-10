public class dogfacts {
    public static void getresponse(){
        //Integer numberoffacts = 1;
        string endpointUrl = 'https://catfact.ninja/fact'; 
    
    
    Http http = new http();
    
    HttpRequest req = new HttpRequest();
    req.setEndpoint(endpointUrl);
    req.setMethod('GET');
        
    HttpResponse res = http.send(req);
        if(res.getStatusCode() == 200){
            string responseJson = res.getBody();
            Map<String ,Object> JsonResponse = (Map<String,Object>) JSON.deserializeUntyped(responseJson);
                  string fact = (String) JsonResponse.get('fact');
                    system.debug('Facts' + fact);
                
            }
        
        else{
            system.debug('Error in Api call ' + res.getStatusCode());
       
    
    
    }
}
}