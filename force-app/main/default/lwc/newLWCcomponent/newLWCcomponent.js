import { LightningElement } from 'lwc';
export default class NewLWCcomponent extends LightningElement {

    name='Abhishek';
    namechange;
changevalue(event){
   // console.log(event.target.value);
    this.name=event.target.value;

}

handleClick(){
   this.namechange=this.name;
}

}