public class showaccountrecord {
    @AuraEnabled(cacheable=true)
    public static list<Account> acclist(){
        return[select id , Name , Rating from Account where Rating = 'hot'];
    }

}