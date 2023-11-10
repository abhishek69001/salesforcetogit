public class Questclass {
    @AuraEnabled(cacheable=true)

    public static list<Questions_Answers__c> quest(){
        return[select Questions__c , Answers__c from Questions_Answers__c];
    }

}