import { LightningElement,api,track,wire } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getLatestContacts from '@salesforce/apex/ContactController.getLatestContacts';
import handleDeleteContact from '@salesforce/apex/ContactController.deleteContact';
import updateContactRecord from '@salesforce/apex/ContactController.updateContactRecord';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class DatatableAssignment extends LightningElement {



contactData;
error;

columns = [
    { label: 'First Name', fieldName: 'FirstName', type: 'text' },
    { label: 'Last Name', fieldName: 'LastName', type: 'text' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Action', type: 'action', typeAttributes: { rowActions: actions } }
];

@track showEditModal = false;
@track selectedContact;

@wire(getLatestContacts)
wiredContacts({ error, data }) {
    if (data) {
        this.contactData = data;
        this.error = undefined;
    } else if (error) {
        this.error = error;
        this.contactData = undefined;
    }
}

handleRowAction(event) {
    const action = event.detail.action;
    const row = event.detail.row;
    console.log(event);

    switch (action.name) {
        case 'edit':
            this.handleEdit(row);
            break;
        case 'delete':
            this.handleDelete(row);
            break;
        default:
            break;
    }
}

handleEdit(row) {
    // Open the edit modal and set the selected contact
    this.selectedContact = row;
    console.log(this.selectedContact.Email);
    this.showEditModal = true;
}

handleCancelEdit() {
    // Close the edit modal when canceled
    this.showEditModal = false;
}

handleSaveEdit(event) {
    // Handle the edited contact data from the edit form
    const updatedContact = event.detail;

    console.log(updatedContact.Id);
    
    updateContactRecord({
        firstName: updatedContact.FirstName,
        lastName: updatedContact.LastName,
        email: updatedContact.Email,
        recordId:updatedContact.Id
    }).then(result => {
        console.log(result.Id);
        
        // Here, we'll just update the contactData to show the change in Data Table
    this.contactData = this.contactData.map((contact) =>
    contact.Id === updatedContact.Id ? updatedContact : contact
);

this.showEditModal = false;
this.showToast('Success', 'Contact updated successfully.', 'success');
    }).catch(error => {
        console.log(error);
    });

    
}

async handleDelete(row) {
    // Implement the logic to handle the delete action
    // For example, you can call an Apex method to delete the record
    // and refresh the data using refreshApex() function
    try {
        // Call the Apex method to delete the contact record
        await this.deleteContact(row.Id);
        this.contactData = this.contactData.filter(contact => contact.Id !== row.Id);
        this.showToast('Success', 'Contact deleted successfully.', 'success');
    } catch (error) {
        console.log(error);
        this.showToast('Error', 'Error deleting contact.', 'error');
    }
}

deleteContact(contactId) {
    // Implement the Apex method to delete the contact record
    return new Promise((resolve, reject) => {
        // Replace 'yourApexMethodName' with the actual name of your Apex method
        // In the Apex method, handle the contact deletion and return the appropriate response
        handleDeleteContact({ contactId: contactId })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

showToast(title, message, variant) {
    this.dispatchEvent(
        new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        })
    );
}
}

const actions = [
{ label: 'Edit', name: 'edit' },
{ label: 'Delete', name: 'delete' }
];