import { LightningElement } from 'lwc';
import LEAD_OBJECT from '@salesforce/schema/Lead'
import FIRSTNAME_FIELD from '@salesforce/schema/Lead.FirstName'
import LASTNAME_FIELD from '@salesforce/schema/Lead.LastName'
import COMPANY_FIELD from '@salesforce/schema/Lead.Company'
import LEADSOURCE_FIELD from '@salesforce/schema/Lead.LeadSource'
import TITLE_FIELD from '@salesforce/schema/Lead.Title'
import INDUSTRY_FIELD from '@salesforce/schema/Lead.Industry'
import TYPE_FIELD from '@salesforce/schema/Lead.Type_of_Deal__c'
import STATUS_FIELD from '@salesforce/schema/Lead.Status'
import EMAIL_FIELD from '@salesforce/schema/Lead.Email'
import PHONE_FIELD from '@salesforce/schema/Lead.Phone'
import MOBILE_FIELD from '@salesforce/schema/Lead.MobilePhone'
export default class LeadCreator extends LightningElement {
    objectApiName = LEAD_OBJECT;
    fields = [FIRSTNAME_FIELD,LASTNAME_FIELD,COMPANY_FIELD,LEADSOURCE_FIELD,TITLE_FIELD,INDUSTRY_FIELD,TYPE_FIELD,STATUS_FIELD,EMAIL_FIELD,PHONE_FIELD,MOBILE_FIELD]
    handleSucesss(){
        console.log("worked")
    }
}