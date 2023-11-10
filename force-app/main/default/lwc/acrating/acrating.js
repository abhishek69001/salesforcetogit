import { LightningElement } from 'lwc';
import Accrating from '@salesforce/schema/Account.Rating'
export default class Acrating extends LightningElement {

 objectname = 'Account';
fields = [Accrating];

}