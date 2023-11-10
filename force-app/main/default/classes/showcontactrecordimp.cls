public class showcontactrecordimp {

    @AuraEnabled(cacheable = true)
    public static list<Contact> conlist(){
        return [select lastname , Accountid , phone from Contact];
    }

    @AuraEnabled
    public static void deleteContacts(list<string> deletelist){
        list<Contact> contactlist = [select Id from Contact where Id IN : deletelist];
    
        if(!contactlist.isEmpty()){
            try{
              delete contactlist;
            }
             catch(Exception  e){
           throw new AuraHandledException(e.getMessage());
            }
            
        }

    }

}