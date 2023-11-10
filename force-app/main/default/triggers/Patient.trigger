trigger Patient on Patient__c (after insert, after update, after delete) {    
	Triggerspractice.countnumberofpatients(Trigger.new);
}