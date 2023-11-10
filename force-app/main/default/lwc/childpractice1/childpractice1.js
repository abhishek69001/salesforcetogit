import { LightningElement, api } from 'lwc';
export default class Childpractice1 extends LightningElement {
    
    @api lname = 'shinde';
    @api city = 'Navimumbai';

    @api childmethod(last , state){
     this.lname = last;
     this.city = state;
    }

}