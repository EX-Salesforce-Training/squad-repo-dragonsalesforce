import { LightningElement, wire } from 'lwc';
import CID_FIELD from '@salesforce/schema/Customer__c.Name';
import FIRST_NAME_FIELD from '@salesforce/schema/Customer__c.First_Name__c';
import LAST_NAME_FIELD from '@salesforce/schema/Customer__c.Last_Name__c';
import getCust from '@salesforce/apex/getComponents.getCust';
const COLUMNS = [
    {label: 'Customer ID', fieldName: CID_FIELD.fieldApiName, type: 'text'},
    {label: 'First Name', fieldName: FIRST_NAME_FIELD.fieldApiName, type: 'text'},
    {label: 'Last Name', fieldName: LAST_NAME_FIELD.fieldApiName, type: 'text'}
]

export default class OrderList extends LightningElement {
    columns = COLUMNS;
    @wire(getCust)
    customers;

}