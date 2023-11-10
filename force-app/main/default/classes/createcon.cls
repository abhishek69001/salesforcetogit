public class createcon {

@AuraEnabled
public static void insertcon(string lasname, string phon){
    Contact con = new Contact();
    con.LastName = lasname;
    con.Phone = phon;

    insert con;
}

@AuraEnabled(cacheable=true)
public static list<Contact> conlist(){
    return [select id , lastname ,LastModifiedDate from contact order by LastModifiedDate desc limit 10];
}
}