import { LightningElement } from "lwc";
import home from 'c/home.html';
import apparel from 'c/apparel.html';
import clearance from 'c/clearance.html';
import mtb from 'c/mtb.html';
import road from 'c/road.html';
import training from 'c/training.html';

export default class App extends LightningElement {
showHome = true;
showMtb = false;
showRoad = false;
showTraining = false;
showClearance = false;
showApparel = false;

  render() {
    if (this.showHome == true){
      return home;
    }
    else if (this.showMtb == true){
      return mtb;
    }
    else if(this.showRoad == true){
      return road;
    }
    else if(this.showTraining == true){
      return training;
    }
    else if(this.showClearance == true){
      return clearance;
    }
    else if(this.showApparel == true){
      return apparel;
    }
  }



  handleHomeClick(){
    console.log("HOME");
    this.showHome = true;
    this.showMtb = false;
    this.showRoad = false;
    this.showBmx = false;
    this.showTraining = false;
    this.showClearance = false;
    this.showApparel = false;
  }
  handleMtbClick(){
    console.log("MTB");
    this.showHome = false;
    this.showMtb = true;
    this.showRoad = false;
    this.showBmx = false;
    this.showTraining = false;
    this.showClearance = false;
    this.showApparel = false;
  }
  handleRoadClick(){
    console.log("ROAD");
    this.showHome = false;
    this.showMtb = false;
    this.showRoad = true;
    this.showBmx = false;
    this.showTraining = false;
    this.showClearance = false;
    this.showApparel = false;
  }
  handleTrainingClick(){
    console.log("TRAINING");
    this.showHome = false;
    this.showMtb = false;
    this.showRoad = false;
    this.showBmx = false;
    this.showTraining = true;
    this.showClearance = false;
    this.showApparel = false;
  }
  handleClearanceClick(){
    console.log("CLEARANCE");
    this.showHome = false;
    this.showMtb = false;
    this.showRoad = false;
    this.showBmx = false;
    this.showTraining = false;
    this.showClearance = true;
    this.showApparel = false;
  }
  handleApparelClick(){
    console.log("APPAREL");
    this.showHome = false;
    this.showMtb = false;
    this.showRoad = false;
    this.showBmx = false;
    this.showTraining = false;
    this.showClearance = false;
    this.showApparel = true;
  }


myIndex = 0;
carousel() {}

Carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}}
