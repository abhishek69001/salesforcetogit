import { LightningElement } from 'lwc';
export default class Ifelseexample1 extends LightningElement {
    technicaloptions = [
        {
         label: 'C++',
         value : 'C++'        
        },

        {
            label : 'Java',
            value : 'Java'
        },

        {
            label : 'Python',
            value : 'Python',
        },

        {
            label : 'Salesforce',
            value : 'salesforce'
        },
    ]

     nontechnicaloptions = [
        {
         label: 'Sales',
         value : 'Sales'        
        },

        {
            label : 'Marketing',
            value : 'Marketing'
        },

        {
            label : 'Manager',
            value : 'Manager'
        },

        {
            label : 'HR',
            value : 'HR'
        },
    ]

   

    technical;
    selectedsubjects(event){
        this.technical = event.target.value;
    }

    nontechnical;
    selectedsubjectsnon(event){
        this.nontechnical = event.target.value;
    }



    tech = false;
    nontech = false;
    shownontechnical = true;
    showtechnical = true;

    changed(event){
        if(this.tech = event.target.checked){
            this.shownontechnical = false;

        }
        else if(this.tech == false){
            this.shownontechnical = true;
        }
        
    }

    changed1(event){
      if(this.nontech = event.target.checked){
          this.showtechnical = false;
      }

      else if (this.nontech == false){
          this.showtechnical = true;
      }
    }

}