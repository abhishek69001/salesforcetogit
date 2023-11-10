import { LightningElement } from 'lwc';
export default class Parentpractice1 extends LightningElement {

    last;
    city;

    handlechange(event){
         let data = event.target.name;
         if(data == 'last'){
             this.last = event.target.value;
         }
         else{
             this.city = event.target.value;
         }
    }

    handleClick(){
        let data1 = this.template.querySelector('c-childpractice1');
        data1.childmethod(this.last, this.city);
    }

}