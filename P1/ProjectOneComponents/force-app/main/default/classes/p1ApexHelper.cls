public with sharing class p1ApexHelper {
    @AuraEnabled(cacheable=true)
    public static string getUser(){      //Gets Active Users ID
        string userId = UserInfo.getUserId();
        return userId;
    }
    @AuraEnabled(cacheable=true)
    public static string getUser2(){        //Gets Active Users Name
        id userId = UserInfo.getUserId();
        user u =[SELECT id,ContactId,Name FROM User WHERE id=:userId];
        string getName = u.Name;
        return getName;
    }
    @AuraEnabled(cacheable=true)
    public static List<Case> getUserCases(){   //Gets Active Users Cases
        id userId = UserInfo.getUserId();
        User uu =[SELECT id,ContactId,Name FROM User WHERE id=:userId];
        string getContact = uu.ContactId;
        List<Case> c =[SELECT id,ContactId FROM Case WHERE id=:getContact];
        return c;
    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getUserOpps(){      //Gets Active Users Opportunites
        id userId = UserInfo.getUserId();
        User uuu =[SELECT id,ContactId,Name FROM User WHERE id=:userId];
        string getContact = uuu.ContactId;
        List<Opportunity> opp =[SELECT Id,ContactId FROM Opportunity WHERE Contactid=:getContact];
        return opp;
    }
    @AuraEnabled(cacheable=true)
    public static List<Case> getCasesTest(){              //Gets Users Cases Work Around (obtaining id problem)
        id presId = '0055f000007kjt4AAA';
        User uuuu =[SELECT id,ContactId,Name FROM User WHERE id=:presId];
        string getContactSteph = uuuu.ContactId;
        List<Case> con =[SELECT id,ContactId FROM Case WHERE ContactId=:getContactSteph];
        return con;
    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOppTest(){          //Gets Users Opportunites Work Around (obtaining id problem)
        id coolid = '0055f000007kjt4AAA';
        List<Opportunity> Oppor =[SELECT id,CreatedById FROM Opportunity WHERE CreatedById=:coolid];
        return Oppor;
    }
    @AuraEnabled(cacheable=true)                            //Gets a users Lead Work Around (obtaining id problem)
    public static Lead getLeadTest(){
        id presId = '0055f000007kjt4AAA';
        Lead l =[SELECT id,CreatedById FROM Lead WHERE CreatedById=:presId];
        return l;
    }
}