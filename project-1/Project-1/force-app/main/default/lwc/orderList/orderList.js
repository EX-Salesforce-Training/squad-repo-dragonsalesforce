import { LightningElement, wire } from 'lwc';
import OID_FIELD from '@salesforce/schema/Customer_Order__c.Name';
import DATE_FIELD from '@salesforce/schema/Customer_Order__c.Order_Date__c';
import ITEM_NUM_FIELD from '@salesforce/schema/Customer_Order__c.Items_Ordered__c';
import TOTAL_FIELD from '@salesforce/schema/Customer_Order__c.Total__c';
import COMPLETION_STATUS from '@salesforce/schema/Customer_Order__c.Order_Completion_Status__c';
import getOrder from '@salesforce/apex/getComponents.getOrder';
const COLUMNS = [
    {label: 'Order ID', fieldName: OID_FIELD.fieldApiName, type: 'text'},
    {label: 'Order Date', fieldName: DATE_FIELD.fieldApiName, type: 'date'},
    {label: 'Number of Items', fieldName: ITEM_NUM_FIELD.fieldApiName, type: 'text'},
    {label: 'Total', fieldName: TOTAL_FIELD.fieldApiName, type: 'currency'},
    {label: 'Completion Status', fieldName: COMPLETION_STATUS.fieldApiName, type: 'text'}
]

export default class OrderList extends LightningElement {
    columns = COLUMNS;
    @wire(getOrder)
    orders;

}