import { LightningElement } from 'lwc';
export default class Apiparent extends LightningElement {

name;
city;
handlecity(event){
  this.city= event.target.value;
}

handlename(event){
  this.name=event.target.value;
}

handleClick(){
    let callchild=this.template.querySelector('c-apichild');
    callchild.handleClick(this.name,this.city);
}
}