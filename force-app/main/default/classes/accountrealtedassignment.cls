public class accountrealtedassignment {
    @AuraEnabled(cacheable=true)

    public static list<Account> acclist(){
        return [select id ,name from Account limit 20];
    }

    @AuraEnabled(cacheable=true)
    public static list<Contact> conlist(Id accountId){
        return [select id , AccountId from Contact where AccountId =: accountId];
    }

    @AuraEnabled(cacheable=true)
    public static list<Opportunity> opplist(Id accountId){
        return [select id, AccountId from Opportunity where AccountId = : accountId];
    }
    
}