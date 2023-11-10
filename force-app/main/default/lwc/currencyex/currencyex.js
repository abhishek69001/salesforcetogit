import { LightningElement,track,wire } from 'lwc';

import convertamount from '@salesforce/apex/CustomCurrencyConverter.getConverterCurrency';
export default class Currencyex extends LightningElement {
        @track fromcurrency = '';

        @track tocurrency = '';

        @track amount = '';

        @track convertedAmount='';

        @track date='';

 

    get options() {

        return [

            { label: 'US Dollar ', value: 'USD' },

            { label: 'British Pound', value: 'GBP' },

            { label: 'INR Rupee', value: 'INR' },

            { label: ' Germany EUR', value: 'EUR' },

             { label: 'Australian Dollar', value: 'AUD' },

          

        ];

    }

 

    handleSourceChange(event) {

        this.fromcurrency = event.detail.value;

    }

 

    handleTargetChange(event) {

        this.tocurrency = event.detail.value;

    }

 

    handleAmountChange(event) {

        this.amount = event.detail.value;

    }

    

    handleConvert() {

        convertamount({fromcurrency:this.fromcurrency, 

                tocurrency:this.tocurrency, 

                amount: this.amount})

                .then((result) => {

                    this.convertedAmount = result;

                    this.date=new Date().toLocaleDateString();

                    this.error = undefined;

                })

                .catch((error) => {

                    this.error = error;

                    this.convertedAmount = undefined;

                });

 

    }

    handleClear(event){

        this.fromcurrency='';

        this.tocurrency='';

        this.amount='';

        this.convertedAmount='';

        this.date='';

 

    }
}