import { LightningElement } from 'lwc';
import getaccount from '@salesforce/apex/accounthelper.getaccount';
export default class GetAccountIMP extends LightningElement {
     
     accountresult;
        error;
   handleClick(){
        getaccount()
        .then( result =>{
           this.accountresult=result;
        })

        .catch(error =>{
            this.error=error;
        })
   }
   
      columnsList=[
        {label:'Name', fieldName : 'Name'},
        {label:'Phone', fieldName : 'Phone' , type : 'text'},
        {label:'Rating', fieldName : 'Rating' , type : 'text'},
        {label:'AnnualRevenue ', fieldName : 'AnnualRevenue' , type : 'number'},
        
      ]

}