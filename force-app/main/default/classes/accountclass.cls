public class accountclass {
    @AuraEnabled(cacheable = true)

    public static list<Contact>conlist(){
        return [select Lastname, Phone from Contact limit 10];
    }

}