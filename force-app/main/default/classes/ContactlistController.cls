public class ContactlistController {
    @Auraenabled
    public static List<Contact> getconlist(){
        return[select id , Lastname from contact limit 10];
    }

}