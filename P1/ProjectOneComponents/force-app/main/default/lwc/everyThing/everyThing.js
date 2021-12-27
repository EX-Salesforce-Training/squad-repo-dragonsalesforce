import { LightningElement, wire } from 'lwc';
import getUser from '@salesforce/apex/p1ApexHelper.getUser';                  //probably too many imports. Mostly for LDS, with some importing Apex functions
import getUser2 from '@salesforce/apex/p1ApexHelper.getUser2';
import CASE_OBJECT from '@salesforce/schema/Case'
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject'
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description'
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import REASON_FIELD from '@salesforce/schema/Case.Reason';
import CONTACT_FIELD from '@salesforce/schema/Case.ContactId'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import NAME_OBJECT from '@salesforce/schema/Opportunity.Name'
import STAGE_OBJECT from '@salesforce/schema/Opportunity.StageName'
import TYPE_OBJECT from '@salesforce/schema/Opportunity.Type_of_Deal__c'
import SOURCE_OBJECT from '@salesforce/schema/Opportunity.LeadSource'
import CLOSE_OBJECT from '@salesforce/schema/Opportunity.CloseDate'
import AMOUNT_OBJECT from '@salesforce/schema/Opportunity.Amount'
import DESCRIPTION_OBJECT from '@salesforce/schema/Opportunity.Description'
import LEAD_OBJECT from '@salesforce/schema/Lead'
import FIRSTNAME_FIELD from '@salesforce/schema/Lead.FirstName'
import LASTNAME_FIELD from '@salesforce/schema/Lead.LastName'
import COMPANY_FIELD from '@salesforce/schema/Lead.Company'
import LEADSOURCE_FIELD from '@salesforce/schema/Lead.LeadSource'
import TITLE_FIELD from '@salesforce/schema/Lead.Title'
import INDUSTRY_FIELD from '@salesforce/schema/Lead.Industry'
import TYPE_FIELD from '@salesforce/schema/Lead.Type_of_Deal__c'
import STATUS2_FIELD from '@salesforce/schema/Lead.Status'
import EMAIL_FIELD from '@salesforce/schema/Lead.Email'
import PHONE_FIELD from '@salesforce/schema/Lead.Phone'
import MOBILE_FIELD from '@salesforce/schema/Lead.MobilePhone'
import DATE_FIELD from '@salesforce/schema/Case.CreatedDate'
import getUserCases from '@salesforce/apex/p1ApexHelper.getUserCases';
import getUserOpps from '@salesforce/apex/p1ApexHelper.getUserOpps';
import getCasesTest from '@salesforce/apex/p1ApexHelper.getCasesTest';
import getOppTest from '@salesforce/apex/p1ApexHelper.getOppTest';
import getLeadTest from '@salesforce/apex/p1ApexHelper.getLeadTest';
export default class EveryThing extends LightningElement {
    value = 'inProgress';    //code of initializing variables. Mostly for picklist opporation. Also for storing a single ID for a case id.
    cCase = false
    cOpp = false
    cLead=false
    lCase = false
    lOpp = false
    lLead = false
    leadId;

    @wire(getUser) user;             //wire decorators for importing Apex
    @wire(getUser2) user2;
    @wire(getUserCases) uCasesList;
    @wire(getUserOpps) uOppList;
    @wire(getCasesTest) casetest;
    @wire(getOppTest) opptest;
    @wire(getLeadTest) leadtest;
    get options() {                      //picklist values
        return [
            { label: 'Create Opportunity', value: 'createOpportunity' },
            { label: 'Create Case', value: 'createCase' },
            { label: 'Create Lead', value: 'createLead' },
            { label: 'Lookup Case', value: 'lookCase' },
            {label: 'Lookup Opportunity', value: 'lookOpp'},
            {label: 'Lookup Lead', value: 'lookLead'},
        ];
    }

    handleChange(event) {                   //handling picklist switchs (can probably do more efficiently with a loop)
        this.uCases=this.casetest.data
        this.value = event.detail.value;
        this.leadId = this.leadtest.data.Id
        if(this.value=='createCase'){
            this.cCase=true
            this.cOpp=false
            this.lCase=false
            this.lOpp=false
            this.cLead=false
            this.lLead=false
        }else if(this.value=='createOpportunity'){
            this.cCase=false
            this.cOpp=true
            this.lCase=false
            this.lOpp=false
            this.cLead=false
            this.lLead=false
        }else if(this.value=='createLead'){
            this.cCase=false
            this.cOpp=false
            this.lCase=false
            this.lOpp=false
            this.cLead=true
            this.lLead=false
        }else if(this.value=='lookCase'){
            this.cCase=false
            this.cOpp=false
            this.lCase=true
            this.lOpp=false
            this.cLead=false
            this.lLead=false
        }else if(this.value=='lookOpp'){
            this.cCase=false
            this.cOpp=false
            this.lCase=false
            this.lOpp=true
            this.cLead=false
            this.lLead=false
        }else if(this.value=='lookLead'){
            this.cCase=false
            this.cOpp=false
            this.lCase=false
            this.lOpp=false
            this.cLead=false
            this.lLead=true
        }
    }
    objectApiName = CASE_OBJECT;                                                                                         //these 3 set of fields are for LDS record forms
    fields = [SUBJECT_FIELD,DESCRIPTION_FIELD,PRIORITY_FIELD,ORIGIN_FIELD,STATUS_FIELD,REASON_FIELD, CONTACT_FIELD];
    handleSuccess(){
        console.log("worked")
    }
    objectApiName2 = OPPORTUNITY_OBJECT;
    fields2 = [NAME_OBJECT,STAGE_OBJECT,TYPE_OBJECT,SOURCE_OBJECT,CLOSE_OBJECT,AMOUNT_OBJECT]
   
    objectApiName5 = LEAD_OBJECT;
    fields3 = [FIRSTNAME_FIELD,LASTNAME_FIELD,COMPANY_FIELD,LEADSOURCE_FIELD,TITLE_FIELD,INDUSTRY_FIELD,TYPE_FIELD,STATUS2_FIELD,EMAIL_FIELD,PHONE_FIELD,MOBILE_FIELD]
    
    objectApiName3 = CASE_OBJECT;                                                   //these 3 set of fields are for lds record view forms
    description=DESCRIPTION_FIELD
    subject=SUBJECT_FIELD
    status=STATUS_FIELD
    reason=REASON_FIELD
    date=DATE_FIELD

    objectApiName4= OPPORTUNITY_OBJECT;
    oppName=NAME_OBJECT
    oppStage=STAGE_OBJECT
    oppClose=CLOSE_OBJECT
    oppAmount=AMOUNT_OBJECT
    oppDesc=DESCRIPTION_OBJECT

    leadFirst = FIRSTNAME_FIELD
    leadLast = LASTNAME_FIELD
    leadCompany = COMPANY_FIELD
    leadIndustry = INDUSTRY_FIELD
    leadStatus = STATUS2_FIELD
    leadType = TYPE_FIELD
    


}