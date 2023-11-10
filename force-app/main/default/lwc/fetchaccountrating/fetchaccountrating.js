import { LightningElement,wire } from 'lwc';
import acclist from '@salesforce/apex/showaccountrecord.acclist';
export default class Fetchaccountrating extends LightningElement {
    
    variable ;

    columnsList = [
        {label : 'Name' , fieldName : 'Name'},
        {label : 'Rating' , fieldName : 'Rating'}

    ];
    
  handleClick(){
     this.variable = true;
  }
   
    hide(){
        this.variable = false;
    }

    @wire(acclist) accountrecords;
    

}