public class futuremethodexample {
    public futuremethodexample (){
        takeshower();
        takebreakfast();
        carrepair();
        moviewatching();
        
        
    }
    
    public static void takeshower(){
        system.debug('Im taking shower');
    }
    
    public static void takebreakfast(){
        system.debug('having breakfast');
        
    }
    
    @future
    public static void carrepair(){
        system.debug('car repairing');
    }
    
    public static void moviewatching(){
        system.debug('watching movie');
    }

}