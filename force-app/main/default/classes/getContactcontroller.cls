public class getContactcontroller {
    @Auraenabled
    public static list<Contact> getcontact(){
        return[select id , Lastname from contact limit 20];
    }

}