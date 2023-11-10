import { LightningElement,wire } from 'lwc';
import conlist from '@salesforce/apex/accountclass.conlist';
export default class Detailsaccountassignment extends LightningElement {

    columnsList = [
        {label: 'LastName', fieldName : 'LastName'},
        {label: 'Phone', fieldName : 'Phone'}
    ];


    accrecord;
    error;
    //@wire (conlist) accrecord;

    @wire(conlist) accrecords ({ error, data }) {
       if (data) {
           this.accrecord = data;
           console.log(JSON.stringify(this.accrecord)); 
      } else if (error) { 
          this.error = error;  
     }   }
}