public class wiredecoratorclass {
    @AuraEnabled(cacheable = true)
    public static list<Account> acclist(){
        
        return[select id , Name , Rating, Phone from Account limit 10];
    }

}