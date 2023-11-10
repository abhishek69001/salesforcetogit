import { LightningElement } from 'lwc';
import insertrec from '@salesforce/apex/preventduplicateLWC.insertrec';
export default class Insertingrecordpreventduplicate extends LightningElement {

enteredname;

getname(event){
    this.enteredname = event.target.value;
}


handleClick(){
     if (this.accname) {
            insertAccount({ accname: this.enteredname })
               .then((result) => {
                   alert ('record is inserted');
               }).catch((err) => {
                   
               });
}
}
}