public class cartclass {
    @AuraEnabled(cacheable=true)
    public static list<Cart__c> cartlist(){
        return [select id , Tshirt_name__c , Price__c , Neck__c from Cart__c];
    }

    @AuraEnabled(cacheable=true)
    public static list<AggregateResult> carttotal(){
        return [select sum(Price__c) from Cart__c];
    }

    @AuraEnabled(cacheable=true)
    public static list<AggregateResult> cartcount(){
        return [select count(id) from Cart__c];
    }


     @AuraEnabled
     public static void deleteContacts(list<string> deletelist){
        list<Cart__c> cartlist = [select Id from Cart__c where Id IN : deletelist];
    
        if(!cartlist.isEmpty()){
            try{
              delete cartlist;
            }
             catch(Exception  e){
           throw new AuraHandledException(e.getMessage());
            }
            
        }

    }



    @AuraEnabled
    public static Id insertinorder(string fullname ,String tshirtname , string Billingaddress, string shippingaddress, Decimal price, string email, string phone){
        Ordered_products__c neworder = new Ordered_products__c();
            neworder.Tshirts_Names__c = tshirtname;
            neworder.Billing_address__c = Billingaddress;
            neworder.shipping_address__c = shippingaddress;
            neworder.Price__c = price;
            neworder.Full_name__c = fullname;
            neworder.Phone__c = phone;
            neworder.Email__c = email;

            insert neworder;
            return neworder.Id;
            
        
    }

}