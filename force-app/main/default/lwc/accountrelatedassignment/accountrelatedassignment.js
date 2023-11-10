import { LightningElement,wire,api } from 'lwc';
import acclist from '@salesforce/apex/accountrealtedassignment.acclist';
import conlist from '@salesforce/apex/accountrealtedassignment.conlist';
import opplist from '@salesforce/apex/accountrealtedassignment.opplist';
export default class Accountrelatedassignment extends LightningElement {

    columnslist = [
        {label : 'name', fieldName : 'Name'},
        {label : 'Id', fieldName : 'Id'}
    ]

    conlists = [
        {label : 'AccountId', fieldName : 'AccountId'},
        {label : 'Id', fieldName : 'Id'}
    ]

    opplist = [
        {label : 'AccountId', fieldName : 'AccountId'},
        {label : 'Id', fieldName : 'Id'}
    ]

    @wire(acclist) acrecords;
    @wire(conlist, {accountId : '$recordid'}) conrecords;
   @wire(opplist,{accountId: '$recordid'}) oprecords;

   get filteredrecords(){
       return this.conrecords.data;
   }
   get opfilteredrecords(){
       return this.oprecords.data;
   }


    recordid ='';
    handleRowAction(event){
        const selectrows = event.detail.selectedRows;
        if(selectrows.length > 0){
            this.recordid = selectrows[0].Id;
            alert(this.recordid);
        }
        else{
            this.recordid = '';
        }
        

    }
}