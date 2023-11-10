public class tshirtcartclass {

@AuraEnabled
public static void addToCart(String tshirtName, String neck, Decimal price) {
        Cart__c cartRecord = new Cart__c();
        cartRecord.Tshirt_name__c = tshirtName;
        cartRecord.Neck__c = neck;
        cartRecord.Price__c = price;

        insert cartRecord;
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
}