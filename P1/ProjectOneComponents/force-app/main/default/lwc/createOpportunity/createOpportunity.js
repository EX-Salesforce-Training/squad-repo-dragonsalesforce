import { LightningElement } from 'lwc';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import NAME_OBJECT from '@salesforce/schema/Opportunity.Name'
import ACCOUNT_OBJECT from '@salesforce/schema/Opportunity.AccountId'
import STAGE_OBJECT from '@salesforce/schema/Opportunity.StageName'
import TYPE_OBJECT from '@salesforce/schema/Opportunity.Type_of_Deal__c'
import SOURCE_OBJECT from '@salesforce/schema/Opportunity.LeadSource'
import CLOSE_OBJECT from '@salesforce/schema/Opportunity.CloseDate'
import AMOUNT_OBJECT from '@salesforce/schema/Opportunity.Amount'
export default class CreateOpportunity extends LightningElement {
    objectApiName = OPPORTUNITY_OBJECT;
    fields = [NAME_OBJECT,ACCOUNT_OBJECT,STAGE_OBJECT,TYPE_OBJECT,SOURCE_OBJECT,CLOSE_OBJECT,AMOUNT_OBJECT]
}