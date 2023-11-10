public class createopporrecordimp {

    @AuraEnabled
    public static void insertopp(string oppname , date oppcloseddate , string oppstage){
    Opportunity opp = new Opportunity();
        opp.Name = oppname;
        opp.CloseDate =  oppcloseddate;
        opp.StageName = oppstage;


        insert opp;
    

}
}