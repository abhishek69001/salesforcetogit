import { LightningElement } from 'lwc';
export default class Component2 extends LightningElement {
    num1;
    num2;

    result;

    number1(event){
        this.num1 = event.target.value;
    }

    number2(event){
        this.num2 = event.target.value;
    }

    sendadditiontoparent(){
        this.result = parseInt(this.num1) + parseInt (this.num2);
        
        const addevent = new CustomEvent('newcustomevent',{detail : this.result});

        this.dispatchEvent(addevent);
    }
    

}