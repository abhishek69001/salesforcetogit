import { LightningElement } from 'lwc';
export default class Lwccomponentpractice extends LightningElement {
    name;
    savedname;

   changedname(event){
       this.name = event.target.value;
   }

   handleClick(){
       this.savedname = this.name;
   }

   clearclick(){
       this.savedname = '';
   }
}