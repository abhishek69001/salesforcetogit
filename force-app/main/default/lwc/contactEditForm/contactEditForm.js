import { LightningElement,api,track } from 'lwc';
export default class ContactEditForm extends LightningElement {

     @api editedContact;
    @track firstName = '';
    @track lastName = '';
    @track email;

    connectedCallback() {
        this.firstName = this.editedContact.FirstName;
        this.lastName = this.editedContact.LastName;
    }

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }
    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleCancel() {
        this.dispatchEvent(new CustomEvent('cancel'));
    }

    handleSave() {
        const updatedContact = {
            ...this.editedContact,
            FirstName: this.firstName,
            LastName: this.lastName,
            Email:this.email
        };

        this.dispatchEvent(new CustomEvent('save', { detail: updatedContact }));
    }
}