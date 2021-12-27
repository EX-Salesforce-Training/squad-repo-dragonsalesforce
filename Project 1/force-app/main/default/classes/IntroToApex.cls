public class IntroToApex {

    Public void SoqlForLoop(){
        List<Account> pokeAccs= new List<Account>();
        for(Integer i = 0; i < 251; i++){
            pokeAccs.add(new Account(Name='pokemon '+ i));
        }
        insert pokeAccs;
    }
}