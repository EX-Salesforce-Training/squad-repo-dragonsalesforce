import { LightningElement } from "lwc";
import home from 'c/home.html';
import about from 'c/aboutUs.html';
import shop from 'c/shop.html';
import resources from 'c/resources.html';
import contact from 'c/contact.html';
import searchErr from 'c/searchErr.html';

export default class App extends LightningElement {
  showHome = true;
  showAbout = false;
  showShop = false;
  showResources = false;
  showContact = false;
  showSearchErr = false;
  render(){
    if(this.showHome == true){
      return home;
    }
    else if(this.showAbout == true){
      return about;
    }
    else if(this.showShop == true){
      return shop;
    }
    else if(this.showResources == true){
      return resources;
    }
    else if(this.showContact == true){
      return contact;
    }
    else if(this.showSearchErr == true){
      return searchErr;
    }
  }

  handleHomeClick(){
  this.showHome = true;
  this.showAbout = false;
  this.showShop = false;
  this.showResources = false;
  this.showContact = false;
  this.showSearchErr = false;
  }
  handleAboutClick(){
  this.showHome = false;
  this.showAbout = true;
  this.showShop = false;
  this.showResources = false;
  this.showContact = false;
  this.showSearchErr = false;
  }
  handleShopClick(){
  this.showHome = false;
  this.showAbout = false;
  this.showShop = true;
  this.showResources = false;
  this.showContact = false;
  this.showSearchErr = false;
  }
  handleResourcesClick(){
  this.showHome = false;
  this.showAbout = false;
  this.showShop = false;
  this.showResources = true;
  this.showContact = false;
  this.showSearchErr = false;
  }
  handleContactClick(){
  this.showHome = false;
  this.showAbout = false;
  this.showShop = false;
  this.showResources = false;
  this.showContact = true;
  this.showSearchErr = false;
  }
  handleSearchClick(){
  var searchTerm = this.template.querySelector('.menuSearch').value;
  searchTerm = searchTerm.toLowerCase();
  if(searchTerm == 'home'){
  this.showHome = true;
  this.showAbout = false;
  this.showShop = false;
  this.showResources = false;
  this.showContact = false;
  this.showSearchErr = false;
  }
  else if(searchTerm == 'about' || searchTerm == 'about us'){
  this.showHome = false;
  this.showAbout = true;
  this.showShop = false;
  this.showResources = false;
  this.showContact = false;
  this.showSearchErr = false;
  }
  else if(searchTerm == 'shop'){
  this.showHome = false;
  this.showAbout = false;
  this.showShop = true;
  this.showResources = false;
  this.showContact = false;
  this.showSearchErr = false;
  }
  else if(searchTerm == 'resources'){
  this.showHome = false;
  this.showAbout = false;
  this.showShop = false;
  this.showResources = true;
  this.showContact = false;
  this.showSearchErr = false;
  }
  else if(searchTerm == 'contact' || searchTerm == 'contact us'){
  this.showHome = false;
  this.showAbout = false;
  this.showShop = false;
  this.showResources = false;
  this.showContact = true;
  this.showSearchErr = false;
  }
  else{
  this.showHome = false;
  this.showAbout = false;
  this.showShop = false;
  this.showResources = false;
  this.showContact = false;
  this.showSearchErr = true;
  }
  }



}
