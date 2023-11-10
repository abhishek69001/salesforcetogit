import { LightningElement } from 'lwc';
import createaccount from '@salesforce/apex/accounthelper.Createaccount';
export default class CraeteAccount extends LightningElement {
  name;
  phone;
  annualrevenue;
  accountid;

namechange(event){
  this.name=event.target.value;
}
Phonechange(event){
  this.phone=event.target.value;
}
Annualchange(event){
  this.annualrevenue=event.target.value;
}
handleClick(){
  this.createaccountrecord();
}

createaccountrecord(){
     createaccount( {name:this.name ,phone:this.phone,annualrevenue:this.annualrevenue})
     .then(result =>{
      this.accountid=result;
      alert('Account record created'+this.accountid);
     })

     .catch(error =>{

     })
}
}