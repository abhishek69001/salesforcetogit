public class opportunitydatatable {
    
    @AuraEnabled
    public static list<opportunity> opplist(){
        return [select Id,CloseDate , AccountId , Name from Opportunity];

    }

}