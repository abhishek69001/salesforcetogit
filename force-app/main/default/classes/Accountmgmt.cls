@RestResource(urlMapping = '/accountmgmt/')
global class Accountmgmt {
    @httpGet
    global static list<Account> getAccount(){
        Map<String , string> paramsMap = RestContext.request.params;
        string accrating = paramsMap.get('Rating');
        list<Account> acclist =[select id ,Rating, name from Account where Rating =: accrating limit 10];
        return acclist;
    }

}