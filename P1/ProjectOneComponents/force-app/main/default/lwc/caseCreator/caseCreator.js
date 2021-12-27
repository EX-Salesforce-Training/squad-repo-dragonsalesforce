import { LightningElement,wire } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case'
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject'
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description'
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import REASON_FIELD from '@salesforce/schema/Case.Reason';
import ACCOUNT_FIELD from '@salesforce/schema/Case.AccountId'
import CONTACT_FIELD from '@salesforce/schema/Case.ContactId'
import getCasesTest from '@salesforce/apex/p1ApexHelper.getCasesTest';
import getUser from '@salesforce/apex/p1ApexHelper.getUser';
export default class CaseCreator extends LightningElement {
    objectApiName = CASE_OBJECT;
    fields = [SUBJECT_FIELD,DESCRIPTION_FIELD,PRIORITY_FIELD,ORIGIN_FIELD,STATUS_FIELD,REASON_FIELD,ACCOUNT_FIELD,CONTACT_FIELD];
    handleSucess(){
        console.log("worked")
    }
    @wire(getCasesTest) StephList;
    @wire(getUser) user;
    renderedCallback(){
        console.log(this.StephList)
        console.log(this.user)
    }
   
}