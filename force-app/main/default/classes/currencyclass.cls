global class currencyclass {
    public static Decimal getCurrencyConvereter(String tocurrency, String fromcurrency,Decimal amount){

        String endpoint='https://api.apilayer.com/exchangerates_data/convert?to='+tocurrency+'&from='+fromcurrency+'&amount='+amount+'&apikey=By4F6GdEruDoxQ2iNkC6wc0ZJ6wpzYP2';


        http http=new http();


        httprequest request=new httprequest();

        request.setMethod('GET');

        request.setEndpoint(endpoint);


        httpresponse response=http.send(request);

        system.debug(response.getBody());


        Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());

         System.debug('Result ---->'+results);

        return (Decimal) results.get('result');

    }


    @future(callout=true)

    global static void converstion(List<Id> newopp){

    List<Opportunity> oppList= new List<Opportunity>();
        for(Id oppId : newopp){
                Opportunity opp = [SELECT Id, Amount, USD__c FROM Opportunity WHERE Id = :oppId];
                Decimal conver=getCurrencyConvereter('USD','INR',opp.Amount);
            if(opp.USD__c == null ){
                  opp.USD__c =conver;
                  oppList.add(opp);

            }

        }


         if(!oppList.isEmpty())

               upsert oppList;


    }


}