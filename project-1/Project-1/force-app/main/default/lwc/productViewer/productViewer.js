import { LightningElement, api, wire } from 'lwc';
import getProduct from '@salesforce/apex/GetComponents.getProduct';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class ProductViewer extends LightningElement {
    
    @wire(getProduct)
    productList;

    productChoice;
    url = 'https://i.ibb.co/RQ55KZS/null-background.png';
    title = '';
    price = '';

    get productOptions() {
        var listOptions = [];
        if(this.productList.data){
            this.productList.data.forEach(ele =>{
                listOptions.push({label: ele.Name + " - $" + ele.Product_Price__c, value:ele.Image_URL__c});
            }); 
        }
        return listOptions;
    }

    handleProductChange(event){
        this.productChoice = event.target.label;
        this.url = event.target.value;
        this.title = event.target.label;
        this.price = event.target.title;
        
    }
        
}
        
        


    
