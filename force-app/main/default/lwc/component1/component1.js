import { LightningElement } from 'lwc';
export default class Component1 extends LightningElement {
    result;
    handlecustomevent(event){
       
        const childresult  = event.detail;
        this.result = childresult;

    }

}