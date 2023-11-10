import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Ldscreatecontacts extends LightningElement {
  recordId;
conid;
  handleSuccess(event) {


     const evt = new ShowToastEvent({
            title:" Contact creation",
            message: "Record is created successfuly",
            variant: "Success",
        });
        this.dispatchEvent(evt);
  }

  handelsubmit(event) {
    alert('record' +JSON.stringify(event.detail.fields));
    
  }
}