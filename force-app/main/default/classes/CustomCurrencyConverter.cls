public class CustomCurrencyConverter {
  @AuraEnabled(cacheable=true)

     //Passparameter inthis method come from lightning web component

    public static double getConverterCurrency(string fromcurrency, string tocurrency, string amount){

        

        //Request for Currency exchange api exchange for example USD to INR 

        http http=new http();

        httprequest request=new httprequest();

        request.setMethod('GET');

        request.setEndpoint('https://api.apilayer.com/exchangerates_data/convert?to='+tocurrency+'&from='+fromcurrency+'&amount='+amount+'&apikey=By4F6GdEruDoxQ2iNkC6wc0ZJ6wpzYP2');

        //Get the response from currency exchange   

        httpresponse response=http.send(request);

         system.debug(response.getBody());

        // Deserialize the json string into primitive data types.

        Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());

         return (double) results.get('result');

    }
}