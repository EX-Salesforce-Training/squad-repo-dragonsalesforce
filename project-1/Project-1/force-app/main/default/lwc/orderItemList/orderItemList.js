import { LightningElement, wire } from 'lwc';
import OI_ID_FIELD from '@salesforce/schema/Order_Item__c.Name';
import OID_FIELD from '@salesforce/schema/Order_Item__c.Part_of_Order__c';
import MAKER_FIELD from '@salesforce/schema/Order_Item__c.Made_By__c'
import ITEM_PRICE_FIELD from '@salesforce/schema/Order_Item__c.Item_Price__c';
import QUANTITY_FIELD from '@salesforce/schema/Order_Item__c.Quantity__c';
import SUBTOTAL_FIELD from '@salesforce/schema/Order_Item__c.Subtotal__c';
import COMPLETED_FIELD from '@salesforce/schema/Order_Item__c.Subtotal__c';
import getOrderItem from '@salesforce/apex/getComponents.getOrderItem';
const COLUMNS = [
    {label: 'Order Item ID', fieldName: OI_ID_FIELD.fieldApiName, type: 'text'},
    {label: 'Order ID', fieldName: OID_FIELD.fieldApiName, type: 'text'},
    {label: 'Maker ID', fieldName: MAKER_FIELD.fieldApiName, type: 'text'},
    {label: 'Item Price', fieldName: ITEM_PRICE_FIELD.fieldApiName, type: 'currency'},
    {label: 'Quantity', fieldName: QUANTITY_FIELD.fieldApiName, type: 'text'},
    {label: 'Subtotal', fieldName: SUBTOTAL_FIELD.fieldApiName, type: 'currency'},
    {label: 'Completion Status', fieldName: COMPLETED_FIELD.fieldApiName, type: 'boolean'}
]

export default class OrderList extends LightningElement {
    columns = COLUMNS;
    @wire(getOrderItem)
    orderItems;

}