import { LightningElement } from 'lwc';
export default class Mathsoperation extends LightningElement {

    number1;
    number2;

    result;

    num1(event){
        this.number1 = event.target.value;
    }

    num2(event){
        this.number2 = event.target.value;
    }

    add(){
        this.result = parseInt(this.number1) + parseInt(this.number2);
    }
    sub(){
        this.result = parseInt(this.number1) - parseInt(this.number2);
    }
    mul(){
        this.result = parseInt(this.number1) * parseInt(this.number2);
    }
    div(){
        this.result = parseInt(this.number1) / parseInt(this.number2);
    }

    clear(){
        this.clearnumber1 ='';
        this.clearnumber2 = '';
        this.result = '';
    }



}