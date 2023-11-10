import { LightningElement, wire, track, api } from 'lwc';
import cartlist from '@salesforce/apex/cartclass.cartlist';
import carttotal from '@salesforce/apex/cartclass.carttotal';
import { refreshApex } from '@salesforce/apex';
import insertinorder from '@salesforce/apex/cartclass.insertinorder';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import deleteContacts from '@salesforce/apex/cartclass.deleteContacts';
	
import { NavigationMixin } from 'lightning/navigation';

import deleteContacts1 from '@salesforce/apex/cartclass.deleteContacts';


export default class Cart extends NavigationMixin(LightningElement) {


    columnList = [
        { label: 'T-shirt Name', fieldName: 'Tshirt_name__c' },
        { label: 'Price', fieldName: 'Price__c' },
        { label: 'Neck', fieldName: 'Neck__c' }

    ];


    @wire(cartlist) cart;
    @track total;
    @wire(carttotal) cartam({ data, error }) {
        
        if (data) {
            this.total = JSON.stringify(data[0].expr0);
            console.log(this.total);
            

        }
        else if (error) {
            console.log('error');
        }

    }


    selectedrecords = '';
    selectedrecordsname = '';

    selectedid(event) {
        const selectrows = event.detail.selectedRows;
        {
            this.selectedrecords = selectrows.map(row => row.Id);
            alert(this.selectedrecords);
            this.selectedrecordsname = selectrows.map(row => row.Tshirt_name__c);
        }





    }


    deleteitems() {
        deleteContacts({
            deletelist: this.selectedrecords
        })
            .then(() => {
                return Promise.all([
                refreshApex(this.cart),

                refreshApex(this.cartam())
                

                ]);            
                

            })
            .catch((err) => {
                this.errormessage = err;

            })

        


    }


    showModal = false;

    order() {
        alert(this.selectedrecords);
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }


    fulname;
    pric;
    saddress;
    baddress;
    ema;
    pho;

    fname(event) {
        this.fulname = event.target.value;
    }

    // pri(event){
    //     this.pric = event.target.value;
    // }

    saddr(event) {
        this.saddress = event.target.value;
    }

    baddr(event) {
        this.baddress = event.target.value;
    }
    emai(event){
        this.ema = event.target.value;
    }
    phon(event){
        this.pho = event.target.value;
    }


    @api orderId;
    confirmorder() {
    // const orderedid = this.orderId;
    this.showModal = false;
    console.log('Full Name:', this.fulname);
    console.log('Price:', this.pric);
    console.log('Shipping Address:', this.saddress);
    console.log('Billing Address:', this.baddress);
    console.log('T-Shirt Names:', this.selectedrecordsname);

    const combinedTshirtNames = this.selectedrecordsname.join(',');

    insertinorder({ 
        fullname: this.fulname, 
        price: this.total, 
        shippingaddress: this.saddress, 
        Billingaddress: this.baddress, 
        tshirtname: combinedTshirtNames, 
        email: this.ema, 
        phone: this.pho 
    })
    .then(result => {
        this.orderId = result; // Get the returned ID from the Apex method
        this.showToast('Success', 'Order placed successfully. Order ID: ' + this.orderId, 'success');
        console.log(result);
    })
    .catch(error => {
        this.showToast('Error', 'Error while placing the order: ' + error.message, 'error');
        console.log(error);
    });
     deleteContacts1({
            deletelist: this.selectedrecords
        })
            .then(() => {
                return refreshApex(this.cart);

            })
            .catch((err) => {
                this.errormessage = err;

            });
            

            let componentDef = {
            
            componentDef: "c:orderdetails",
            attributes: {
                label: 'Navigated From Another LWC component',
                recordId: this.orderId,
            },

        };
        let encodedComponentDef = btoa(JSON.stringify(componentDef));
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
             apiName: 'order_page'
                
            },
            // state :{
            //     params: encodedComponentDef
            // }
        });

    }
    


showToast(title, message, variant) {
    const event = new ShowToastEvent({
        title: title,
        message: message,
        variant: variant
    });
    this.dispatchEvent(event);
}





}