public class createAccountrecordimp {

@AuraEnabled
public static void insertaccount(string accname , string accphone){
    Account acc = new Account();
    acc.Name = accname;
    acc.Phone = accphone;

    insert acc;

}


 @AuraEnabled
    public static void insertcontact(string conlastname , string conphone , string conemail){
        Contact con = new Contact();
        con.lastname = conlastname;
        con.phone = conphone;
        con.email = conemail;

        insert con;

    }


  @AuraEnabled
    public static void insertopp(string oppname , date oppcloseddate , string oppstage){
    Opportunity opp = new Opportunity();
        opp.Name = oppname;
        opp.CloseDate =  oppcloseddate;
        opp.StageName = oppstage;


        insert opp;
    

}
}