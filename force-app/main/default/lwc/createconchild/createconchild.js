import { LightningElement,wire } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import conlist from '@salesforce/apex/createcon.conlist';

    const actions = [
    { label: 'Edit', name: 'edit' },
    { label: 'Delete', name: 'delete' }
];

export default class Createconchild extends NavigationMixin(LightningElement) {



    columnsList=[
        {label:'lastname', fieldName:'LastName'},
        {label:'Phone', fieldName:'Phone'},
        { type: 'action', typeAttributes: { rowActions: actions } }


    ];


    @wire(conlist)latestcreatedcontact;


    handleRowAction(event){
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'edit':
                this.navigateToEditPage(row.Id);
                alert(row.Id);
                break;
            case 'delete':
                this.deleteContact(row.Id);
                break;
            default:
                break;
        }
    }
    
 navigateToEditPage(contactId) {
     console.log('Contact ID:', contactId);
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
             "url": "https://pinnacleo-a-dev-ed.develop.lightning.force.com/lightning/n/order_page"
            },
            state:{
                recordId: contactId
            }
        });
    }

    deleteContact(contactId) {
        deleteRecord(contactId)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact deleted successfully.',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: 'Error deleting the contact.',
                        variant: 'error'
                    })
                );
            });
    }
}