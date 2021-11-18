import { LightningElement } from "lwc";
import tickets from 'c/tickets.html'
import home from 'c/home.html'
import fantasy from 'c/fantasy.html'
import news from 'c/news.html'
import stats from 'c/stats.html'
import stadium from 'c/stadium.html'
export default class App extends LightningElement {
displayHome=true
displayTickets=false
displayFantasy=false
displayNews=false
displayStats=false
displayStadium=false
render(){
  if (this.displayTickets==true){
    return tickets
  }
  if (this.displayFantasy==true){
    return fantasy
  }
  if (this.displayHome==true){
    return home
  }
  if (this.displayNews==true){
    return news
  }
  if (this.displayStats==true){
    return stats
  }
  if (this.displayStadium==true){
    return stadium
  }
}
handleTicketsClick(){
  this.displayGiveaways=false
  this.displayFantasy=false
  this.displayHome=false
  this.displayTickets=true
  this.displayNews=false
  this.displayScores=false
  this.displayStats=false
  this.displayStadium=false
  console.log("Clicked on Tickets");
}
handleStadiumClick(){
  this.displayGiveaways=false
  this.displayFantasy=false
  this.displayHome=false
  this.displayTickets=false
  this.displayNews=false
  this.displayScores=false
  this.displayStats=false
  this.displayStadium=true
  console.log("Clicked on Stadium")
}
handleStatsClick(){
  this.displayGiveaways=false
  this.displayFantasy=false
  this.displayHome=false
  this.displayTickets=false
  this.displayNews=false
  this.displayScores=false
  this.displayStats=true
  this.displayStadium=false
  console.log("Clicked on Stats")
}
handleNewsClick(){
  this.displayGiveaways=false
  this.displayFantasy=false
  this.displayHome=false
  this.displayTickets=false
  this.displayNews=true
  this.displayScores=false
  this.displayStats=false
  this.displayStadium=false
  console.log("Clicked on News")
}
handleFantasyClick(){
  this.displayGiveaways=false
  this.displayFantasy=true
  this.displayHome=false
  this.displayTickets=false
  this.displayNews=false
  this.displayScores=false
  this.displayStats=false
  this.displayStadium=false
  console.log("Clicked on Fantasy")
}
handleHomeClick(){
  this.displayGiveaways=false
  this.displayFantasy=false
  this.displayHome=true
  this.displayTickets=false;
  this.displayNews=false
  this.displayScores=false
  this.displayStats=false
  this.displayStadium=false
  console.log("Clicked on Home")
}
}
