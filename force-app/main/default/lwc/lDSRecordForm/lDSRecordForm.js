import { LightningElement,api } from 'lwc';
import name from '@salesforce/schema/Account.Name';
import Rating from '@salesforce/schema/Account.Rating';
import phone from '@salesforce/schema/Account.Phone';
import Industry from '@salesforce/schema/Account.Industry';
export default class LDSRecordForm extends LightningElement {
    
objectname = "Account";

fields = [name,Rating,phone,Industry]



handlesuccess(event){
  alert('record is created in account');
}
}