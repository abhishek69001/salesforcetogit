import { LightningElement } from 'lwc';
export default class Lwclifecyclehook extends LightningElement {

  renderedCallback(){
      console.log('renderedCallback call from child');
  }

connectedCallback() {
         
          console.log('connectedCallback result--->child');
    }
  constructor() {
              super();

     console.log('constructor call from child');
    }

    
}