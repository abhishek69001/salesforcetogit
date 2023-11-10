public class accouttest {
    @AuraEnabled(cacheable = true)
    public static list<Account> acctest(){
        return [select id , AnnualRevenue from Account];
    }

}