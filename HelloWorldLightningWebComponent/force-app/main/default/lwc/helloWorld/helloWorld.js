import { LightningElement } from "lwc";


export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";
 
    get scoreBoard(){
         var Gryffindor=document.getElementById('Gryffindor').value
         var RavenClaw=document.getElementById('Ravenclaw').value
         var Hufflepuff=document.getElementById('Hufflepuff').value
         var score = document.getElementById('team').value
         if(score=="Gryffindor"){
             point=100;
         }
         if(team=="RavenClaw"){
             point=98;
         }
          if(team=="Hufflepuff"){
             point=90;
         }
          if(team=="Hufflepuff"){
             point=89;
         }
     }
  
  
  
  get features() {
    return [
      {
        label: "Learn in the browser.",
        icon: "utility:edit",
      },
      {
        label: "View changes to code instantly with Live Compilation.",
        icon: "utility:refresh",
      },
      {
        label: "Style your components with SLDS.",
        icon: "utility:brush",
      },
    ];
  }
}
