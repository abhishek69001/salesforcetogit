public class Queueablesecondjob implements Queueable{
    public void execute(QueueableContext coq){
        delete[select id from contact where phone = null];
    }

}