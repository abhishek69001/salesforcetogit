import { LightningElement } from 'lwc';
import insertcontact from '@salesforce/apex/insertcontactusingimp.insertcontact';
export default class InsertcontactusingImp extends LightningElement {

    lname;
    ema;
    pho;
    contactid;

    lastnamechange(event){
        this.lname = event.target.value;
    }

    emailchange(event){
        this.ema = event.target.value;

    }
    phonechange(event){
        this.pho = event.target.value;

    }

    save(){
        insertcontact({conlastname: this.lname, conphone :  this.pho , conemail: this.ema })
        .then((result) => {
            this.contactid = result;
            alert('Record is created' + this.contactid);
        })
        
        .catch((err) => {
            
        });

    }

}