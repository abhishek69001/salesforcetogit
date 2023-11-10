public class displaycontactrecords {
      
      @AuraEnabled(cacheable = true)
      public static list<Contact> conlists(){
          return [ select LastName , Phone,Email from Contact limit: 10];
          
      }
}