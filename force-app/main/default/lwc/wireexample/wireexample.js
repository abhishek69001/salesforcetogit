import { LightningElement, wire } from 'lwc';
import acclist from '@salesforce/apex/wiredecoratorclass.acclist';
export default class Wireexample extends LightningElement {

    columns = [
        {label : 'Name' , fieldName : 'Name'},
        {label : 'Phone' , fieldName : 'Phone'},
        {label : 'Rating' , fieldName : 'Rating'}
    ];
@wire(acclist) actable ;



}