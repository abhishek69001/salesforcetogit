//write a trigger on Account when inserted contact should be created automatically.
public class Triggerspractice {
    
    
  /* public static void insertcontact(list<account> acclist){
        list<Contact> conlist = new list<Contact>();
        for(Account acc:acclist){
            Contact con = new Contact();
            con.AccountId = acc.ID;
            con.lastname = acc.Name;
            conlist.add(con);
        }
        insert conlist;
    }*/

//Write a trigger on account where Account name should not be duplicate 
   
/*public static void duplicateprevent(list <Account> acclist){
    list<Account> oldlist = [select id , name from account];
    for(Account newac : acclist){
        for(Account oldac : oldlist){
            if(newac.Name == oldac.Name){
                newac.Name.adderror('this name is already preset change the name');
            }
        }
    }
}*/
    
    //when ever opportunity stagename =closedwon automatically update the account field rating=hot.
    
    /*public static void accratinghot(list<Opportunity> opplist){
        set<id> setid = new set<id>();
            for(Opportunity opp : opplist){
                if(opp.stagename == 'closed won'){
                    setid.add(opp.Accountid);
                }
            }
        
        list<Account> acclist = [select id ,(select Accountid from Opportunities) from Account where ID IN : setid];
            for(Account acc : acclist){
                acc.Rating = 'hot';
            }
        update acclist;
        }*/
    
    
    // Whenever a new contact is inserted in the system, update the accounts phone field with the contacts phone field.
    /*public static void updateaccount(list<Contact> conlist){
        set<id> setid = new set<id>();
        for(Contact con : conlist){
            if(con.AccountId != null){
                setid.add(con.AccountId);
            }
        }
        
        list<Account> acclist = [select id,(Select Accountid from Contacts) from Account Where ID IN : setid];
        for(Account acc: acclist){
            for(contact con: conlist){
                acc.phone = con.Phone;
            }
        }
        update acclist;
    
    } */
    
    
    //Prevent to delete account if they have related opportunity
    
    /*public static void preventdelete(list<Account> acclist){
        set<id> setid = new set<id>();
        for(Account acc : acclist){
            setid.add(acc.ID);
        }
        
        list<Opportunity> opplist = [select id , accountID from Opportunity where AccountID IN : setid];
        for(Opportunity opp : opplist){
            for(Account acc: acclist){
                if(opp.AccountId == acc.Id){
                    acc.adderror('you cant delete this record');
                }
            }
        }
    }*/
    
    
    
    //Throw an error if phone number is not 10 dight of length.
    
    /*public static void phonevalidation(list<Account> acclist){
        for(Account acc: acclist){
            if(acc.phone.length() != 10){
                acc.phone.adderror('enter 10 digits');
            }
        }
    }*/

        
        
        
    //update account phone when contact phone is updated.
    
   /* public static void updateaccount(list<Contact> conlist){
        set<id> setid = new set<id>();
        for(Contact con : conlist){
            setid.add(con.AccountId);
        }
        
        list<Account> acclist = [select id ,name,(select AccountId from Contacts)from Account where ID IN : setid];
        for(Account acc: acclist){
            for(Contact con :conlist){
                acc.Phone = con.Phone;
            }
        }
        update acclist;
    }*/
    
    
    
   // update Contact phone when account phone is updated
    
   /* public static void updatecontact(list<Account> acclist){
        set<id> setid = new set<id>();
        for(Account acc: acclist){
            setid.add(acc.ID);
        }
        
        list<Contact> conlist = [select accountid from Contact where AccountId IN : setid];
        for(Contact con : conlist){
            for(Account acc: acclist){
                if(con.AccountId == acc.Id){
                    con.Phone = acc.Phone;
                }
            }
            
        }
        update conlist;
        
        
    }
*/    
    /*public static void insertaccount(list<Contact> conlist){
        list<Account> acclist = new list<Account>();
        for(Contact con:conlist){
            Account acc =  new Account();
            acc.name = con.LastName;
            acclist.add(acc);
        }
        insert acclist;
       
          for (Integer i = 0; i < conlist.size(); i++) {
            Contact con = conlist[i];
            Account acc = acclist[i];
            con.AccountId = acc.Id;
        }

        update conlist;
        }*/
    
    
    /*public static void updatedescription(list<Account> acclist){
        set<id> setid = new set<id>();
        for(Account acc: acclist){
            if(acc.Rating == 'hot'){
                setid.add(acc.Id);
            }
        }
        
        list<Opportunity> opplist = [select Accountid,Description from Opportunity where Accountid IN : setid];
        for(Opportunity opp : opplist){
            for(Account ac: acclist){
                if(opp.AccountId == ac.Id){
                    if(ac.Rating == 'hot'){
                        ac.Description = opp.Description;
                    }
                    
                }
            } 
        }
        update acclist;
        
    }*/
    
    
    // Write a trigger on contact if user kept email & phone is empty then set set it as phone as a '999' & email as 'no@email.com
 //respectively while creating new contact
 
   /* public static void autoemailphone(list<Contact> conlist){
        for(Contact con : conlist){
            if(con.Phone == null) {
                con.Phone = '999';
            }
            if(con.Email == null){
                con.Email = 'no@email.com';
                
        }
        
    }
                                                            
        
}*/
    
    //Create related contact when Account is created
   /* public static void insertrelatedcon(list<Account> acclist){
	list<Contact> conlist = new list<Contact>();
        for(Account acc: acclist){
            Contact con = new Contact();
            con.AccountId = acc.Id;
            con.LastName = acc.Name;
            conlist.add(con);
        }
        insert conlist;
        
            
        }*/
    
    //Update Account Rating to Hot on account when opportunity stage equals 'closed Won'
    /*public static void accrating(List<Opportunity>opplist){
        set<Id> setid = new set<Id>();
        for(Opportunity opp : opplist){
            setid.add(opp.AccountId);
            
        }
        
        list<Account> acclist = [select id , name from Account where ID IN : setid];
        for(Account acc: acclist){
            for(Opportunity opp : opplist){
                if(opp.StageName == 'closed won'){
                acc.Rating = 'hot';
                }
            }
            
        }
        update acclist;
    } */
    
    
    //If Account has more than 2 Contacts show error 'You cannot create more than 2 contacts for this account'----------------------------------------------------------------------
	
   /* public static void errorcreation(list<Contact> conlist){
        Set<Id> setid = new Set<Id>();
    for (Contact con : conlist) {
        setid.add(con.AccountId);            
    }

    List<Account> acclist = [SELECT Id, (SELECT Id, AccountId FROM Contacts) FROM Account WHERE ID IN :setid];
    for (Account acc : acclist) {
        Integer consize = acc.Contacts.size();
        if (consize > 2) {
            for (Contact con : conlist) {
                if (con.AccountId == acc.Id) {
                    con.AccountId.addError('You have exceeded the limit of contact creation for this account.');
                    // Exit the loop after setting the error message for the account
                }
            }
        }
    }

}*/
    //update account phone field when contact is updated.
    /*public static void updateacc(list<Contact> conlist){
        set<Id> setid = new set<Id>();
        for(Contact con: conlist){
            setid.add(con.AccountId);
            
        }
        
        list<Account> acclist = [select id , name from account where ID IN : setid];
        For(Contact con: conlist){
            for(Account acc : acclist){
                if(acc.Id == con.AccountId){
                    acc.Phone = con.Phone;
                }
            }
        }
        update acclist;
    }
    */
    
    //update contact when Account is updated.
    
   /* public static void updatecon(list<Account> acclist){
        set<Id> setid = new set<Id>();
            for(Account acc: acclist){
                setid.add(acc.Id);
            }
        
        
        list<Contact> conlist = [select AccountId from contact where AccountID IN : setid];
        for(Contact con:conlist){
            for(Account acc: acclist){
                if(con.AccountId == acc.Id){
                    con.Phone = acc.Phone;
                }
            }
        }
        update conlist;
    }*/
    
    //write a trigger on account when rating is hot industry should be banking.
/*    
    public static void updateindustry(list<Account> acclist){
        for(Account acc: acclist){
            if(acc.Rating == 'hot'){
                acc.Industry = 'Banking';
            }
        }
        
 */
    
    // On Lead object if 'Industry' field is blank then throw error while inserting & updating record
    
/*    public static void leadindu(list<lead> lelist){
        for(lead le : lelist){
            if(le.Industry == null){
                le.Industry.adderror('this field is mandatory');
            }
        }
    }
*/
    // Whenever Account Rating is changed to "Warm" then create an record on Opportunity
    /*public static void oppcreation(list<Account> acclist){
        list<Opportunity> oplist = new list<Opportunity>();
        for(Account acc : acclist){
            if(acc.Rating == 'Warm'){
                Opportunity opp = new Opportunity();
                opp.accountId = acc.Id;
                opp.Name = acc.name;
                opp.StageName = 'Closed won';
                opp.CloseDate = system.today();
                oplist.add(opp);                
            }
        }
        insert oplist;
    }*/
    
    //Create related account when contact is created 
//Condition: Account Name = Contact Last Name, maintain relationship between them 

  /*  public static void insertacc(list <Contact> conlist){
        list<Account> acclist = new list<Account>(); 
        for(Contact con : conlist){
            Account acc = new Account();
            acc.Name = con.LastName;
            acc.Rating = 'Hot'; 
            acclist.add(acc);
            
       
        }
        insert acclist;
        
        
        list<Account> newacc = [select Id ,LastModifiedDate from Account order by LastModifiedDate desc limit 1];
        list<Contact> connew = [select Id ,AccountId , LastModifiedDate from Contact order by LastModifiedDate desc limit 1];
        //list<Contact> updatedcon = new list<Contact>();
        for(Account acc : newacc){
            for(Contact con : connew){
                if(acc.LastModifiedDate == con.LastModifiedDate){
                con.AccountId = acc.Id;
                }
            }
        }
         update connew;
	        
        
        
        
    } */
    
    //Write a trigger whenever Amount field is updated on account then that amount should be equally
    // divided into associated Contacts on Amount field.
    
    /*public static void distribute(list<Account> acclist){
       // list<Contact> conlist = new list<Contact>();
        set<Id> setid = new set<Id>();
        for(Account acc : acclist){
            setid.add(acc.Id);
        }
        
        list<Contact> conl = [select Id , accountId from Contact where AccountID IN: setid];
        //String final;
        integer numberofcontacts = conl.size();
        for(Contact con : conl){
            for(Account acc: acclist){
                if(acc.Id == con.AccountId){
                    Double finalvalue = acc.AnnualRevenue / numberofcontacts;
                    
                    con.Title = String.valueOf(finalvalue.format()) ;
                    system.debug(con.Title);
                }
            }
}
        update conl;
        
                
            }*/
    
    //Split email id from @ when new record created on contact and update split values 
    //in Billing Street & Shipping Street on related account
    //
    
    
  /*  public static void split(list<Contact> conlist){
        
        set<ID> setid = new set<ID>();
        for(Contact con : conlist){
            setid.add(con.AccountId);
        }
        list<Account> acclist= [select id from Account where ID IN : setid];
        list<Account> updatedac = new list<Account>();
        for(Account acc: acclist){
            for(Contact con:conlist){
                if(con.AccountId == acc.Id){
                    string splittedvalue = con.Email.split('@').get(1);     
                    acc.Description = splittedvalue;
                }
                
            }
        }
        update acclist;
    }*/
    
        
    //Creates the number of contacts which are equal to the number which we will 
    //enter in the Number of Contacts field on the Account Object.
    //
    
    /*public static void insertmultiplecon (list<Account> acclist){
        list<Contact> conlist = new list <Contact>();
        for(Account acc: acclist){
            for(Decimal i = 0; i < acc.Number_of_Contacts__c; i++){
            	Contact con = new Contact();
                con.LastName = acc.Name + i;
                con.AccountId = acc.Id;
                conlist.add(con);
            
            }
        }
        insert conlist; 
    }*/
    
    
   // On contact there is field checkbox named 'Primary_Contact__c' for every contact.
   //  My requirement is only one contact can be a primary contact in an account. 
   //  If a new contact has updated as primary contact, then previous contacts should be unchecked from primary contact
   
   /* public static void makeprimary(list<Contact> conlist){
        set<Id> setid = new set<Id>();
        set<ID> oldsetsId = new set<ID>();
        for(Contact con : conlist){
            setid.add(con.AccountId);
            
        }
        list<Contact> oldcontact = [select id , accountid, Primary__c from Contact where Primary__c = true AND AccountId IN : setid];
        for(Contact old: oldcontact){
            oldsetsId.add(old.Id);
        }
        
        list<Contact> contactstoupdate = new list<Contact>();
        for(Contact con : conlist){
            if(oldsetsId.contains(con.Id)){
                con.Primary__c = false;
            }
            oldsetsId.remove(con.Id);
            contactstoupdate.add(con);
        }
        
        update contactstoupdate;	
    }
    
    
    
    //Update a field (city) in Contact when same field(city) is updated in Account
    //*/
    //
    
    
    
   /* public static void countnumberofpatients(List<Patient__c> patientlist){
        set<Id> setid = new set<ID>();
        for(Patient__c pati :patientlist){
            setid.add(pati.Doctor__c);
        }
        
        list<Doctor__c> doclist = [select id ,name,(select id from Patients__r) from Doctor__c where ID IN : setid];
        for(Doctor__c doc: doclist){  
            Decimal nop = doc.Patients__r.size();
            system.debug(nop);
            doc.Number_of_Patients__c = nop;
                     
        }
        update doclist;
        
        
    }

    
    
    public static void countnumberofdoctors(list<Doctor__c> doclist){
        set<ID> setid = new set<ID>();
        for(Doctor__c doc : doclist){
            setid.add(doc.Specialization__c);
        }
        
        list<Specialization__c> spec = [select id ,name,(select id from Doctors__r) from Specialization__c where ID IN : setid];
       		for(Specialization__c sp: spec){
        		Decimal nod = sp.Doctors__r.size();
                system.debug(nod);
                sp.number_of_Doctors__c = nod;
    }
        update spec;
              
    
    
    }*/
    
    //Whenever Account Rating is changed to "Warm" then create an record on Opportunity
    
    /*public static void createopp(list<Account> acclist){
        list<Opportunity> opplist = new list <Opportunity>();
        for(Account acc: acclist){
            if(acc.Rating == 'Warm'){
                Opportunity opp = new Opportunity();
                opp.Name = 'opp1';
                opp.CloseDate = system.today();
                opp.StageName = 'closed Won';
                opplist.add(opp);
            }
        }
        insert opplist;
    }*/
    
    //write a trigger on Account object whenever the account is deleted prevent the deletion of contact
    
    /*public static void preventdeletion(list<Account> acclist){
        set<Id> setid = new set<Id>();
        for(Account acc : acclist){
            setid.add(acc.Id);
        }
        
        list<Contact> conlist = [select id , accountId from Contact where AccountId IN : setid];
        for(Contact con : conlist){
            con.AccountId = null;
        }
        update conlist;
                    
                    
                
            } */
    
    
  // On contact there is field checkbox named 'Primary_Contact__c' for every contact.
   //  My requirement is only one contact can be a primary contact in an account. 
   //  If a new contact has updated as primary contact, then previous contacts should be unchecked from primary contact
   
   /* public static void makeprimary(list<Contact> conlist){
        set<Id> setid = new set<Id>();
        set<ID> oldsetsId = new set<ID>();
        for(Contact con : conlist){
            setid.add(con.AccountId);
            
        }
        list<Contact> conlists =[select id , AccountId , Primary__c from Contact where AccountId IN : setid];
        
        list<Contact> updatecontact = new list<Contact>();
        for(Contact con : conlist){
            if(con.Primary__c == true){
                for(Contact existing : conlists){
                    if(existing.accountId == con.AccountId){
                        existing.Primary__c
                    }
                }
            }
            
        }*/
    

    
    
//Create a “Top X Designation” custom object which is the related list to Opportunity (Lookup Relationship). In the Top X Designation object, create the fields

//Type (Picklist),
//Document Attached (Checkbox)
//Create one field Handoff Attached with picklist type with values are Yes, No on Opportunity Object.
//Requirement :---If Type (Top X Designation) = "Contract Flow Down/Handoff", and "Document Attached” = True then
// "Handoff Attached" = True, otherwise false.

    /*public static void updateopp(list<Top_X_Designation__c> topx){
        set<Id> setid = new set<Id>();
        for(Top_X_Designation__c top: topx){
            setid.add(top.Opportunity__c);
        }
        
        list<Opportunity> opplist = [select id , Handoff_Attached__c,(select id from Top_X_Designations__r)from Opportunity Where ID IN :setid];
        for(Opportunity opp: opplist){
            for(Top_X_Designation__c top : topx){
                if(top.opportunity__c == opp.Id){
                    if((top.Type__c == 'Handoff' || top.Type__c == 'Contract Flow Down') && top.Document_Attached__c == true){
                        opp.Handoff_Attached__c = 'Yes';
                    }
                    else{
                        opp.Handoff_Attached__c = 'No';
                    }
                }
            }
            
        }
        update opplist;
        
        

    }*/
    
    /*public static void deactivate(list<Products__c> prod){
        list<ApexTrigger> apt = [SELECT Id, Name, Status FROM ApexTrigger];
        for(Products__c pr:prod){
            if(pr.Deactivate_all_triggers__c == true){
                apt.status = false;
                
            }
        }
       
    }/*/
    
    
    //trigger-if opportunity deleted then delete related contact and account
    
    /*public static void deleterel(list<Opportunity> opplist){
        set<Id> setid = new set<Id>();
        for(Opportunity opp : opplist){
            setid.add(opp.AccountId);
        }
        
        list<Account> acclist = [select id from account where ID IN : setid];
        list<Account> ac = new list<Account>();
        for(Account acc: acclist){
            for(Opportunity opp : opplist){
                if(opp.AccountId == acc.Id){
                    ac.add(acc);
                }
            }

        delete ac;
    }
    
    
    
  
}*/
    //When opportunity stage updated then account description will update same and
    // create a new product that is in relationship with opportunity
    
    public static void oppo(list<Opportunity> opplist){
        set<Id> setid = new set<Id>();
            for(Opportunity opp : opplist){
                setid.add(opp.AccountId);
			}
        list<Account> acclist = [select id from Account where ID IN :setid];
        for(Account ac: acclist){
            for(Opportunity op : opplist){
                if(ac.Id == op.AccountId){
                    ac.Description = op.StageName;
                }
            }
            
        }
        update acclist;
		
        //list<OpportunityLineItem> opl = new list<OpportunityLineItem>();
        list<Product2> prod = new list<Product2>();
        Product2 pr = new Product2();
        pr.Name = 'phone';
        pr.ProductCode = '2547';
        prod.add(pr);
        //OpportunityLineItem product = new OpportunityLineItem();
        //product.OpportunityId = opp.Id;
        //product.Product2Id = 'GenWattsadasd Diesel 1000kW';
        //product.Quantity = 2;
        //product.UnitPrice = 123456;
        //opl.add(product);
        
        
        insert prod;
        }
}