import { LightningElement,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import {registerListener} from 'c/pubsub';

export default class Pubsubsubscribercomp extends LightningElement {

    showmessage = ''
    @wire(CurrentPageReference)pageRef;

    connectedCallback(){

        registerListener("pubsubpublisher",this.showdata, this);
    }

    showdata(data){
        this.showmessage = data;
    }
}