# SDF Ironworks
## Project Description
A Salesforce Org that supports business operations for a Blacksmithing shop. Hosts an Experience Cloud site that allows customers to view products and submit important information.

## Technologies Used
LWC Components
Apex Triggers 
Apex Classes


## Features
- Combobox selection to display image and price of selected product
- LWC components that use LDS to allow record creation from the experience cloud site for Order, Order Item, Case, and Customer records.
- LWC components that display datatables containing Order, Order Item, Case, and Customer records.
- Triggers that prevent order creation for customers with no payment info
- Triggers that prevent deletion of customers with pending or in progress orders.
- Escalation and Assignment rules for cases which send emails to notify users when a case is assigned to them or escalated.
- Process builder that sends email notifications to a customer email when an order is created, in progress and completed.

 ### To-do list:
- edit apex class that retrieves component to make sure the record to be retreived for Orders, Order Items and cases only return records where createdById = User.Id

https://github.com/EX-Salesforce-Training/squad-repo-dragonsalesforce/tree/Nick-de-Sousa/project-1
