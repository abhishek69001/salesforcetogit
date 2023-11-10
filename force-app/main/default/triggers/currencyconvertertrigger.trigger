trigger currencyconvertertrigger on Opportunity (before insert, before update,after insert, after update) {
     if (Trigger.isAfter && (Trigger.isInsert || Trigger.isUpdate)) {
        List<Id> newOppIds = new List<Id>();
        for (Opportunity opp : Trigger.new) {
            // Check if the Amount field is not null and the USD__c field has not been updated yet
            if (opp.Amount != null && opp.USD__c == null) {
                newOppIds.add(opp.Id);
            }
        }

        if (!newOppIds.isEmpty()) {
            currencyclass.converstion(newOppIds);
        }
    }

     
    

}