public class MixedDMLExample {
    public static void userInsertion() {
        List<User> usrList = [SELECT FirstName FROM User WHERE FirstName = 'Partha Nayak'];
        
        for (User usr : usrList) {
            if (usr.FirstName == 'Partha Nayak') {
                usr.FirstName = 'Partha test';
            }
        }
        
        update usrList;
        System.debug('Users updated');
        
        insertAccount();
    }
    
    @future(callout=true)
    public static void insertAccount() {
        List<Account> acList = new List<Account>();
        Account acc = new Account();
        acc.Name = 'jay111';
        acc.Phone = '78451';
        
        acList.add(acc);
        insert acList;
        System.debug('Account inserted');
    }
}