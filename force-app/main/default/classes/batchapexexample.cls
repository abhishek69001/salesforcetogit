public class batchapexexample implements Database.Batchable <Sobject> {
    
    public Database.QueryLocator start(Database.BatchableContext batchcon){
        return Database.getQueryLocator('select id, Name from account');
    }
    
    public void execute(Database.BatchableContext batchcon, list<Account> acclist){
        for(Account acc: acclist){
            acc.name = 'changed - ' + acc.name;
        }
        update acclist;
    }
    
    public void finish(Database.BatchableContext batchcon){
        system.debug('batch job completed');        
    }

}