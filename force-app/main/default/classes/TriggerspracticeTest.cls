@istest()
public class TriggerspracticeTest {
    @istest()
    static void testing(){
       	Account accnew = new Account();
        accnew.Name = 'Abhishek';
        accnew.Rating = 'Warm';
        insert accnew;
        Opportunity opp = new Opportunity();
        opp.Name = accnew.Name;
        opp.AccountId = accnew.Id;
        opp.StageName = 'Closed Won';
        opp.CloseDate = system.today();
        
        insert opp;
    }
    
  

}