public class orderdetails {
    @AuraEnabled(cacheable=true)
    public static list<Ordered_products__c> orderedlist(){
        return [SELECT Id, Name, Full_name__c, Billing_address__c, shipping_address__c, Tshirts_Names__c, Email__c, Phone__c, Price__c, LastModifiedDate FROM Ordered_products__c order by LastModifiedDate desc limit 1 ];
    }

}