public class ContactController {
@AuraEnabled
public static Contact createContact(String firstName, String lastName, String email) {
    // Create a new contact record and return the contact Id
    Contact newContact = new Contact(FirstName = firstName, LastName = lastName, Email = email);
    insert newContact;
    return newContact;
}

@AuraEnabled(cacheable=true)
public static Contact getContact(String contactId) {
    // Retrieve the contact record using the contactId
    return [SELECT Id, FirstName, LastName, Email FROM Contact WHERE Id = :contactId];
}


// /-------------------------------------------------------For Data Table----------------------------------------------------/


@AuraEnabled(cacheable=true)
public static List<Contact> getLatestContacts() {
    return [SELECT Id, FirstName, LastName, Email FROM Contact ORDER BY CreatedDate DESC LIMIT 10];
}

@AuraEnabled
public static void deleteContact(String contactId) {
    
        Contact contactToDelete = [SELECT Id FROM Contact WHERE Id = :contactId LIMIT 1];
        if (contactToDelete != null) {
            delete contactToDelete;
        }
}

@AuraEnabled
public static Contact updateContactRecord(String firstName, String lastName, String email,Id recordId){
    //Create a new contact record and return the contactId
    Contact existingContact = New Contact();
    existingContact.FirstName = firstName;
    existingContact.LastName = lastName;
    existingContact.Email = email;
    existingContact.Id=recordId;
    update existingContact;
    return existingContact;
}
}