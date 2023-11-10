import { LightningElement,api } from 'lwc';
export default class Apichild extends LightningElement {
   @api namechange='Akhil1';

   name='Abhishek';
    city='Pune';
   
    @api handleClick(par1,par2){
      this.name=par1;
      this.city=par2;
   }
}