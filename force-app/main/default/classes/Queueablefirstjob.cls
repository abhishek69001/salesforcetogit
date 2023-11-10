public class Queueablefirstjob implements Queueable{
    public void execute (QueueableContext conq){
        delete [ select id from account where Rating = 'warm'];
    }

}