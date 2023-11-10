public class Postalapi {
    public static void getresponse() {
        String pin = '410206';
        String endpointUrl = 'https://api.postalpincode.in/pincode/' + pin;

        // http object
        Http http = new Http();
        // request
        // URL
        // Method(get,post,patch,delete)

        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpointUrl);
        req.setMethod('GET');

        // response
        HttpResponse res = http.send(req);

        // Parse the JSON response
        if (res.getStatusCode() == 200) {
            String responseJson = res.getBody();
            List<Object> jsonResponse = (List<Object>) JSON.deserializeUntyped(responseJson);

            for (Object obj : jsonResponse) {
                Map<String, Object> responseMap = (Map<String, Object>) obj;
                List<Object> postOffices = (List<Object>) responseMap.get('PostOffice');

                for (Integer i = 0; i < postOffices.size(); i++) {
                    Map<String, Object> postOfficeMap = (Map<String, Object>) postOffices[i];
                    String postOfficeName = String.valueOf(postOfficeMap.get('Name'));
                    System.debug('Post Office Name ' + (i+1) + ': ' + postOfficeName);
                }
            }
        } else {
            System.debug('Error in API call. Status code: ' + res.getStatusCode());
        }
    }
}