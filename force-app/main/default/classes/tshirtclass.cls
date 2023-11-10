public class tshirtclass {
 @AuraEnabled(cacheable = true)
    public static list<Products__c> prolist(){
        return [select id , Tshirt_Name__c , Tshirt_Image__c , Size__c, Price__c, Neck__c from Products__c];
       }


   @AuraEnabled(cacheable=true)
   public static list<Products__c> searchedlist(string tname){
       return [select id , Tshirt_Name__c , Tshirt_Image__c , Size__c, Price__c, Neck__c from Products__c where Tshirt_Name__c like : '%' + tname + '%'];
       }



        
   }