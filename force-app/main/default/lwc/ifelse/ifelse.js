import { LightningElement } from 'lwc';
export default class Ifelse extends LightningElement {
   variable =false;
   handleChange(event){
      this.variable=event.target.checked;
   }
}