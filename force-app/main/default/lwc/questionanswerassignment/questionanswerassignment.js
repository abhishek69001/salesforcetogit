import { LightningElement, wire } from 'lwc';
import quest from '@salesforce/apex/Questclass.quest';
export default class Questionanswerassignment extends LightningElement {
    
    columnsList = [
        {label: 'Question', fieldName: 'Questions__c'}
    ];


    @wire (quest) questquestions;
    storinganswer;
    storingquestion;
    variable;
    handleRowAction(event){
        const question = event.detail.selectedRows;
        this.storingquestion = question.map(row=>row.Answers__c);
        this.variable = true;
    }

    handleClick(){
        
        alert('Answer is -------->' +this.storingquestion) ;

    }

}