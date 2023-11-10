public class preventduplicateLWC {
    @AuraEnabled
 public static void insertrec(string accname){
     Account oldrecords  = [select id, name from Account];
             if(oldrecords != null ){
            throw new AuraHandledException('Cannot insert record. Account with the same name already exists.');
             }
             Account newAccount = new Account();
        newAccount.Name = accname;
        insert newAccount;
             
         }
     }