import { LightningElement,wire } from 'lwc';
import insertcon from '@salesforce/apex/createcon.insertcon';
import conlist from '@salesforce/apex/createcon.conlist';

export default class Createcon extends LightningElement {

    lname;
    pho;

    lastname(event){
        this.lname = event.target.value;

    }

    phone(event){
        this.pho = event.target.value;
    }

    createrec(){
        insertcon({
            lasname:this.lname, phon:this.pho
        })
        .then(() => {
            alert("Record is saved");
        }).catch(() => {
            
        });
    }



    @wire(conlist) contact;

}