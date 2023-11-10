import { LightningElement } from 'lwc';
export default class Factorial extends LightningElement {

    number1;
    calculatedresult;

    enternumber(event){
        this.number1 = event.target.value;
    }
    
    calculate(){
        const enterednumber = parseInt(this.number1);
        let result = 1;

        for(let i = 2; i <= enterednumber; i++){
            result *= i ;
        }
        this.calculatedresult = result;
    }

    }