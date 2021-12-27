trigger AccountTrigger on Account (before insert, before update, before delete, after insert) {

    switch on Trigger.OperationType {
        
        when BEFORE_DELETE {
            AccountTriggerHelper.preventAccountDeletion();
        }
    }
}