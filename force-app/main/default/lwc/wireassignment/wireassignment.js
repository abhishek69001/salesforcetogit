import { LightningElement, wire } from 'lwc';
import acclist from '@salesforce/apex/wiredecoratorclass.acclist';
export default class Wireassignment extends LightningElement {



    searched = '';
    @wire (acclist, {name:'$searched'}) Accountlists;

    searchrecord(event){
        this.searched = event.target.value;
    }

    columnlist = [
        {label : 'Name' , fieldName : 'Name'},
        {label : 'Rating' , fieldName : 'Rating'},
        {label : 'Phone' , fieldName : 'Phone'}
        
    ];

    
}