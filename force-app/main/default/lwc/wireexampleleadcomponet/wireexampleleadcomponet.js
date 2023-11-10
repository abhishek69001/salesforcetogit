import { LightningElement,wire, api } from 'lwc';
import leadlist from '@salesforce/apex/wiredecoratorleadobject.leadlist';
export default class Wireexampleleadcomponet extends LightningElement {
   @api storedid ;



    columnsList = [
        {label : 'LastName' , fieldName : 'LastName'},
        {label : 'Company' , fieldName : 'Company'}
    ];

    @wire(leadlist) lelist;




    selectedrowid(event){
        var selectrow = event.detail.selectedRows;
        this.storedid = selectrow.id;
    }


    viewdetails(){
       alert('this is thhe ID you selected------>');

    }

}