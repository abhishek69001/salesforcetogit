import { LightningElement } from 'lwc';
export default class Customeventparent extends LightningElement {
     page = 1;
  previousHandler(){
         if (this.page > 1) {
            this.page = this.page - 1;
        }
  }

  nexthandler(){
            this.page = this.page + 1;
  }
}