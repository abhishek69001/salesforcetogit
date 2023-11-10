import { LightningElement } from 'lwc';
import opplist from '@salesforce/apex/opportunitydatatable.opplist';
export default class Opportunitydatatable extends LightningElement {

    oppresult;
    errorlists;

  columnlist = [
       
        {label: 'Name', fieldname : 'Name'},


    ];
    buttonclick(){
    opplist()
       .then((result) => {
           this.oppresult = result;
           
       }).catch((err) => {
           this.errorlist = err;
           
       });
    }
   



  

}