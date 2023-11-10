import { LightningElement,wire,api } from 'lwc';
import conlists from '@salesforce/apex/displaycontactrecords.conlists';
export default class Contactrecordediting extends LightningElement{



columnsList = [
    {label : 'Lastname', fieldName : 'LastName'},
    {label : 'Phone', fieldName : 'Phone'}
    

];


@wire(conlists) conrecord;


@api storeid;
selectedrowid(event){
        const selectedRows = event.detail.selectedRows;
        console.log('selectedRows', selectedRows[0].Id);
        this.storeid = selectedRows.map(row => row.Email);
        
        
    }


    viewdetails(){
        let data1 = this.template.querySelector('c-contactrecordeditingview');
        data1.childmethod(this.storeid);
     

    }
}