import { LightningElement } from "lwc";
var lb = " "; /* "<br>"; until we meet again, shadow DOM*/
let mainArea = document.getElementById("centArea");
var aboutUs =  ["In Todays uncertain world, authorities are mandating owners of dragons", lb,
						  "keep their fiery serpents tethered. The Dragon Leash Corporation is the finest", lb,
							"purveyor of leashes, restraints, muzzles and dragon runs. We carry an extensive", lb,
							"selection of traditional chain based components, as well as the new laser technology", lb, 
							"based offerings from our techno wizards.", lb,
							"No matter your preference, we have a suitable product for dragons of all types and" , lb,
							"sizes. Whether your flaming beast is an ancient chinese water dragon, or newly hatched",lb,
							"wyvern, we have the necessary product, be they truly massive, or only a few hundred pounds.",lb,
							"Coming Soon!!!",lb,
							"Our dental & orthodondestry department has been working on a new diamond crusted variety of chain to",lb,
							"keep your dragons teeth razor sharp. And we all know that diamonds are a dragons best friend!",lb,
							"(especially when paired with one of our 2000 gauge gold chains)."];
var leashInfo = ["Here at The Dragon Leash Corp we sell leashes of the highest caliber.",lb,
                 "We know your dragon is special, and not just any leash will keep your maurauding purveyor of",lb,
                 "of incendiary carnage restrained in both comfort and style. Imbued with the latest in dragon magic",lb,
                 " and technology, our wizards work relentlessly to bring forth products deserving of gracing the ",lb,
                 "of the most fearsome, loveable creatures, from all corners of the known (and unknown) world. Gaurenteed ",lb,
                 "not to melt from dragon fire or snap under the relentless tension these powerful lords of death, flight, ",lb,
                 "might, and cuddles are capable of producing.",lb,
                 "But don't take our word for it, listen to what some of our customers have to say about Dragon Leashes: ", lb,
                 "\"I err, thought 'em might break, but uh, they dont! Good stuff these Dragon Leash Corp. Leashes!\" - Hagrid, Hogwarts Game keeper", lb,
                 "\"My babies are free to fly as they want, but if they eat too many unsullied, a quick tug, and theyre right back to mummy! I dont go anywhere without Dragon Leash Corp Leashes!\" - Khaleesi, Mother of Dragons.", lb,
                 "\"Tick-Click-hissssss Clickity-tick-tick-clickity (more garbled noises)\" - The Nazgul (We're pretty sure they like em!)."];
var runsInfo = "";
var harnessInfo = "";

var contactInfo = [ "Come join us at the castle!",lb,
                    "The draw bridge is down during regular business hours.",lb,
                    "Tuesdays - Friday 11am - 4pm",lb,
                    "Sataurday - 1pm - 4pm",lb,
                    "Closed Sundays & Mondays.",lb,
                    "Dragon's Keep",lb,
                    "31337 Fiery Death Blvd.",lb,
                    "Point Sur-le-Lac, Quebec.",lb,
                    "In the event the draw bridge is up, crossing the moat is not advised.",lb,
                    "Call us at (929) 280 0665."];
var onelongstring;
export default class App extends LightningElement {
  mainContent = aboutUs;
  aboutHandler() { 
    this.mainContent = aboutUs;
   /* 
    TODO: Figure out how to interact with
    the shadow DOM.
    for now, ive been defeated by this kebab-case
    wielding juggernaut.
    for (let itr in this.mainContent)
    {
      onelongstring += itr;
    }
    ($'#mainArea').html(onelongstring);*/
  }

  leashHandler() {
   this.mainContent = leashInfo;
  }

  harnessHandler() {
    this.mainContent = harnessInfo;
  }
  
  runsHandler() {
    this.mainContent = runsInfo;
  }

  contactHandler() {
    this.mainContent = contactInfo;
  }


}
