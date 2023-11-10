import { LightningElement,api,wire } from 'lwc';
import orderedlist from '@salesforce/apex/orderdetails.orderedlist';
export default class Orderdetails extends LightningElement {


    @wire(orderedlist) ordered;

    handleClick(){
        window.print();
    }
        
   

}