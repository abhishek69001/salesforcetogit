import { LightningElement } from 'lwc';
export default class Comboxlwc extends LightningElement {
    
    subjectoption =[
        {
            label:'C',
            value:'C'
        },
        {
            label:'C++',
            value:'C++'
        },
        {
            label:'Java',
            value:'Java'
        },
         {
            label:'Salesforce',
            value:'123'
        }
    ]
    Subject;
    handleChange(event){
        this.Subject=event.target.value;
    }
}