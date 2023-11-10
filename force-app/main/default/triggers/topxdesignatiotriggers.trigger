trigger topxdesignatiotriggers on Top_X_Designation__c (after insert) {
    Triggerspractice.updateopp(trigger.new);

}