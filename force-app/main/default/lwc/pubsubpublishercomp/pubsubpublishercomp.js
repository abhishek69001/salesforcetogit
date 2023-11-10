import { LightningElement,wire } from 'lwc';
import { CurrentPageReference} from 'lightning/navigation';
import {fireEvent} from 'c/pubsub';

export default class Pubsubpublishercomp extends LightningElement {
 
    num1;
    num2;
    total;


    enterednnum1(event){
        this.num1 = event.target.value;

    }
    enterednnum2(event){
        this.num2 = event.target.value;
    }

   @wire(CurrentPageReference)pageRef;

   sendtotal(){
        
        this.total = parseInt(this.num1) + parseInt(this.num2);
        
        fireEvent(this.pageRef, "pubsubpublisher", this.total)
    }
}