public class AccountTriggerHelper {
	
    public static void preventAccountDeletion(Map<Id, Account> oldAccMap) {
        
        List<String> closedStages = new List<String>{'Closed Won', 'Closed Lost'};
            
        List<Opportunity> opps = [SELECT StageName, AccountId
                                 FROM Opportunity
                                 WHERE AccountId IN :oldAccMap.keySet()
                                 AND StageName NOT IN :closedStages];
        
        Set<Id> invalidAccs = new Set<Id>();
        
        for(Opportunity o : opps) {
            invalidAccs.add(o.AccountId);
        }
        
        for(Id invalidId : invalidAccs) {
            oldAccMap.get(invalidId).addError('Accounts with active opportunites cannot be deleted!');
        }
    }
}