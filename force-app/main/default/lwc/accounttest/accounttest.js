import { LightningElement,wire } from 'lwc';
import acctest from '@salesforce/apex/accouttest.acctest';




const REVENUE_FILTER_OPTIONS = [
    { label: 'Greater than $10,000', value: '10000' },
    { label: 'Greater than $30,000', value: '30000' },
    { label: 'Greater than $50,000', value: '50000' }
];
export default class Accounttest extends LightningElement {


    columnsList = [
        {label : 'id', fieldName:'Id'},
        {label: 'Annual Revenue' , fieldName : 'AnnualRevenue'}
    ];

    
    
    selectedrecordid = '';
    selectedrecords = [];
    rowselection(event){
        const selectrows = event.detail.selectedRows;
        if(selectrows.length > 0){
            this.selectedrecordid = selectrows[0].Id
        }
        else{
            this.selectedrecordid = '';
             alert(this.selectedrecordid);
            
        }
      

    }


    

    @wire(acctest) accrecords;
    revenueFilterOptions = REVENUE_FILTER_OPTIONS;
    selectedRevenueFilter = '';

    handleFilterChange(event){
        this.selectedRevenueFilter = event.detail.value;
    }

    get filteredAccounts(){
        const selectedRevenue = parseInt(this.selectedRevenueFilter);

        if(!selectedRevenue || isNaN(selectedRevenue)){
            return this.accrecords.data;
        }

        return this.accrecords.data.filter((account) => account.AnnualRevenue >= selectedRevenue);


    }



    showModal = false;

  handleClick(){
      alert(this.selectedrecordid);
      this.showModal = true;
  }

   closeModal() {    
        this.showModal = false;
    }
    



  
  
}