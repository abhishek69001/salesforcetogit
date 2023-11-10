import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class ChildContactResult extends LightningElement {
    // we need to  pass Contact Id  from the parent component
    @api contactId; 
    contactRecord;

    @wire(getRecord, { recordId: '$contactId', fields: ['Contact.FirstName', 'Contact.LastName', 'Contact.Email', 'Contact.Phone'] })
    wiredContact({ error, data }) {
        if (data) {
            this.contactRecord = data;
        } else if (error) {
            console.error(error);
        }
    }
}