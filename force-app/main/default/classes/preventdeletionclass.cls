public class preventdeletionclass {
    public static void adddeleterror(list<Account> tasklist){
        //list<task> tasklist = [select id from task];
        list<Profile> pro = [select id , name from profile where name = 'System administrator'];
        for(Account tsk : tasklist){
            for(Profile prof:pro)
            if(userinfo.getProfileId() != prof.id){
                    tsk.adderror('You cannot delete this record');

            }
            
            
        }
        
    }
    }