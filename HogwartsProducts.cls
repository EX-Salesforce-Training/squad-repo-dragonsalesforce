public with sharing class HogwartsProducts {
   @AuraEnabled
   public static string createNewProduct(String description){
        HogwartsStore__c productRecord = new HogwartsStore__c (Description__c=description);
        insert productRecord;
        return productRecord.Id;
   }
}
