import { LightningElement,api } from 'lwc';
import lastName from '@salesforce/schema/Contact.LastName';
import Phone from '@salesforce/schema/Contact.Phone';
export default class Contactrecordeditingview extends LightningElement {
  @api ids;
 
   fields = [lastName,Phone];
  
 @api recordids;
  handlecustomevent(event){

      const generatedid = event.detail;
      this.recordids = generatedid;
  }

 @api objectapiName = "Contact";

 

 @api childmethod(storeid){
     this.ids = storeid;

 }
}