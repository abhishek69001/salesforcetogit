trigger Doctorstriggers on Doctor__c (after insert , after update) {
    Triggerspractice.countnumberofdoctors(trigger.new);

}