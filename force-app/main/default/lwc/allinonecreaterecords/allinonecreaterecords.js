import { LightningElement } from 'lwc';
import insertaccount from '@salesforce/apex/createAccountrecordimp.insertaccount';
import insertcontact from '@salesforce/apex/createAccountrecordimp.insertcontact';
import insertopp from '@salesforce/apex/createAccountrecordimp.insertopp';
export default class Allinonecreaterecords extends LightningElement {

    accname;
    accphone;

    cname;
    cphone;
    cemail;

    oname;
    odate;
    ostage;

    
    acname(event){
        this.accname = event.target.value;
    }
    acphone(){
        this.accphone = event.target.value;
    }
    conname(){
        this.cname = event.target.value;
    }
    conphone(){
        this.cphone = event.target.value;
    }
    conemail(){
        this.cemail = event.target.value;
    }
    opname(){
        this.oname = event.target.value;
    }
    opdate(){
        this.odate = event.target.value;
    }
    opstage(){
        this.ostage = event.target.value;
    }




    selectstage =[
        {
            label:'Prospecting',
            value:'Prospecting'
        },
        {
            label:'Qualification',
            value:'Qualification'
        },
        {
            label:'Needs Analysis',
            value:'Needs Analysis'
        },
         {
            label:'Value Proposition',
            value:'Value Proposition'
        }
    ]


    handleClick(){
        alert('Hi')
        alert(this.accname);
        insertaccount({accname : this.accname , accphone : this.accphone})
        insertcontact({conlastname: this.cname, conphone : this.cphone , conemail: this.cemail})
        insertopp({oppname:this.oname, oppcloseddate:this.odate , oppstage :this.ostage})
        
        .then( result =>{
                   alert('Record is saved');
        })
        .catch(error =>{
            console.log(error);
        })
    }
    


}