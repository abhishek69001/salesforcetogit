public class wiredecoratorleadobject {
    @AuraEnabled(cacheable=true)
    public static list<Lead> leadlist(){
        return [select LastName , Company from Lead limit 10];
    }
    

}