import { LightningElement, api } from "lwc";
import backgroundUrl from 'https://widget.campusexplorer.com/media/original/media-76AF5AB8.jpg'

 
/**
 * Show an item
 */
export default class Child extends LightningElement {
 get backgroundStyle() {
        return `height:50rem;background-image:url(${backgroundUrl})`;
        
    }
    
    
     
    
    
}