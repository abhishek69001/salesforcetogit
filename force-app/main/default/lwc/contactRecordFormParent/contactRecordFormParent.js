import { LightningElement,api } from "lwc";
export default class ContactRecordFormParent extends LightningElement {
    fields = ['FirstName', 'LastName', 'Email', 'Phone'];
    createdContactId;
    @api contactId;

    handleSuccess(event) {
        this.contactId = event.detail.id;
    }
}