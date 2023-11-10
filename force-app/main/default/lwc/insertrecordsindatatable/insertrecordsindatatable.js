import { LightningElement } from 'lwc';
export default class Insertrecordsindatatable extends LightningElement {

    columns = [
        
        {label:'Employe ID', fieldName : 'Eid'},
        {label:'First name', fieldName : 'firstname' , type : 'text'},
        {label:'Last name', fieldName : 'lastname' , type : 'text'},
        {label:'Phone ', fieldName : 'phone' , type : 'number'},
        {label:'Gmail', fieldName : 'gmail' , type : 'email'},
        
    ];

   data = [
    {   
        Eid : '1',
        firstname : 'abhishek',
        lastname : 'mohite',
        phone : '9685312457',
        gmail : 'abhi@gmail.com'

    },

     {   
        Eid : '2',
        firstname : 'nikhil',
        lastname : 'chavan',
        phone : '231687987',
        gmail : 'neikhi@gmail.com'

    },

     {   
        Eid : '3',
        firstname : 'akhil',
        lastname : 'reddy',
        phone : '897846521',
        gmail : 'akhil@gmail.com'

    },

     {   
        Eid : '4',
        firstname : 'rahul',
        lastname : 'roy',
        phone : '14253698',
        gmail : 'rahuroy@gmail.com'

    },

     {   
        Eid : '5',
        firstname : 'partha',
        lastname : 'sarthi',
        phone : '145874525',
        gmail : 'partha@gmail.com'

    },

];
}