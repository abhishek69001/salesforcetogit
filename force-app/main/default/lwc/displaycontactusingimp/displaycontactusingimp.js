import { LightningElement, wire } from 'lwc';
import conlist from '@salesforce/apex/showcontactrecordimp.conlist';
import deleteContacts from '@salesforce/apex/showcontactrecordimp.deleteContacts';
import {refreshApex} from '@salesforce/apex';
export default class Displaycontactusingimp extends LightningElement {
 selectedrecords =[];
 errormessage;
 contactlist;
 errorlist;
 recordId;
 



selectedid(event) {
        const selectedRows = event.detail.selectedRows;
        // Display that fieldName of the selected rows
        {
            this.selectedrecords = selectedRows.map(row =>row.Id);
            console.log('selected records '+this.selectedrecords);
        }
    }


deleterec(){
    deleteContacts({deletelist:this.selectedrecords})

    .then(() => {
      
        return refreshApex(this.canlist);
    })
    .catch((err) => {
        this.errormessage = err;
        
    });
}


@wire(conlist) canlist;

 columnsList=[
        {label:'LastName', fieldName : 'LastName'},
        {label:'Phone', fieldName : 'Phone' , type : 'text'}
      ];

}