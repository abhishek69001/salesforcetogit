import { LightningElement } from 'lwc';
import name from '@salesforce/schema/Opportunity.Name';
import closeddate from '@salesforce/schema/Opportunity.CloseDate';
import stage from '@salesforce/schema/Opportunity.StageName';
import accountname from '@salesforce/schema/Opportunity.AccountId';
export default class Createopportunityrecord extends LightningElement {


objectname = 'Opportunity';

    fields = [name, closeddate , stage, accountname];

    handlesuccess(event){
        alert('opportunity record is created');
    }

}