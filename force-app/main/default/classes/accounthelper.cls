public class accounthelper {
     
     @AuraEnabled (cacheable= true)
     public static List<Account>  getaccount(){
          

      return[select Name,Phone from Account limit 10 ];
         
        //  List<Account> acclist =new List<Account>();
        //  acclist=[select id,name,phone,Annualrevenue,rating from Account limit: 10];
        //  return acclist;

        // list<account> acclist=[select id,name,phone,Annualrevenue,rating from Account limit: 10];
        // return acclist;

     }
     @AuraEnabled
     public static Id Createaccount(string name,string phone,integer annualrevenue){
               system.debug(name);
             Account acc = new Account ();
             acc.name=name;
             acc.phone=phone;
             acc.annualrevenue=annualrevenue;

             insert acc;
         system.debug(acc);
             return acc.id;
        
        
     }
}