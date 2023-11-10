import { LightningElement } from 'lwc';
export default class Lwclifecyclehookparent extends LightningElement {
   renderedCallback(){
      console.log('renderedCallback call from parent');
  }

connectedCallback() {
         
          console.log('connectedCallback result--->');
    }
  constructor() {
              super();

     console.log('constructor call from parent');
    }

}