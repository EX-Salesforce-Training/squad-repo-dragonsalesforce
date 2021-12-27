import { LightningElement } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case'
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject'
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description'
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import REASON_FIELD from '@salesforce/schema/Case.Reason';
import ACCOUNT_FIELD from '@salesforce/schema/Case.AccountId'
import CONTACT_FIELD from '@salesforce/schema/Case.ContactId'
import DATE_FIELD from '@salesforce/schema/Case.CreatedDate'
export default class CaseView extends LightningElement {
    objectApiName = CASE_OBJECT;
    recordId="5005f000006uncvAAA"
    description=DESCRIPTION_FIELD
    subject=SUBJECT_FIELD
    status=STATUS_FIELD
    reason=REASON_FIELD
    date=DATE_FIELD
}