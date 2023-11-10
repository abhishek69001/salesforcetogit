public class insertcontactusingimp {

    @AuraEnabled
    public static void insertcontact(string conlastname , string conphone , string conemail){
        Contact con = new Contact();
        con.lastname = conlastname;
        con.phone = conphone;
        con.email = conemail;

        insert con;

    }
}