import { LightningElement,wire,api,track} from 'lwc';
import Size__c from '@salesforce/schema/Products__c';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import prolist from '@salesforce/apex/tshirtclass.prolist';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';  
import searchedlist from '@salesforce/apex/tshirtclass.searchedlist';
import addToCart from '@salesforce/apex/tshirtcartclass.addToCart';
import Logoimages from '@salesforce/resourceUrl/Logoimages';
import { NavigationMixin } from "lightning/navigation";
import {refreshApex} from '@salesforce/apex';
import cartcount from '@salesforce/apex/cartclass.cartcount';
//import myResource from '@salesforce/resourceUrl/resourceReference';






export default class Tshirts extends  NavigationMixin(LightningElement) {

    cartimage = "https://www.iconpacks.net/icons/2/free-shopping-cart-icon-2029-thumb.png";
    
    logoimages = "https://www.simpleimageresizer.com/_uploads/photos/62bfa10a/logo_4000.jpeg";
    
    @api recordsid;
    @api tshirtimage;
    
    selectedProduct;


    searched = '';

     @wire(prolist) tshirtlist;

     @wire(searchedlist, {tname:'$searched'}) searchedrecords;

    enteredvalue(event){
        this.searched = event.target.value;
    }

    showModal = false;

    sendtocart(event) {    
        this.recordsid = event.target.value;
        this.tshirtimage = this.recordsid;
        this.showModal = true;
        
    }
    closeModal() {    
        this.showModal = false;
    }



addtocart(event){
    
    this.selectedProduct = event.target.value;
    //console.log(JSON.stringify(this.selectedProduct.Tshirt_Name__c));

    

            addToCart({
            
                tshirtName : this.selectedProduct.Tshirt_Name__c,
                neck: this.selectedProduct.Neck__c,
                price: this.selectedProduct.Price__c,
            
            })
                .then(() => {
                    
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Product added to the cart!',
                            variant: 'success'
                            
                        })
                        
                    );
                     return refreshApex(this.cartcount);
                    
                   
                })
                .catch((error) => {
                    // Handle errors if necessary
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error',
                            message: 'Failed to add the product to the cart',
                            variant: 'error'
                        })
                    );
                });
        }


        showcart(){         
                this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/lightning/n/cartpage' 

            }
        });
}


totalcounts;

 @wire(cartcount) 
 carcou({data,error}){
       if(data){
         this.totalcounts = JSON.stringify(data[0].expr0);
         console.log(this.totalcounts);

       }
       else if (error){
           console.log('error');
       }
   }




    price = [
    { label:'None',value: ''},
    { label: '499 - 699 ', value: '499' && '699' },
    { label: '700 - 899', value: '700' && '899'},
    { label: '900 - 1500', value: '900' & '1500'}
];

    
     selectedpricefilter = null;

     handleChange(event){
         this.selectedpricefilter = event.detail.value;

     }
      get filteredrecords(){
            const selectedprice = parseInt(this.selectedpricefilter);

            if(!selectedprice || isNaN(selectedprice)){
            return this.searchedrecords.data;
        }

         return this.searchedrecords.data.filter((Products__c) => Products__c.Price__c <= selectedprice);
        }



 backgroundColor = 'white';
  isblack = false;

  get backgroundStyle() {
    return `background-color: ${this.isblack ? 'black' : this.backgroundColor};`;
  }

  changeColor() {
    this.isblack = !this.isblack;
  }
       
   



      

      
}