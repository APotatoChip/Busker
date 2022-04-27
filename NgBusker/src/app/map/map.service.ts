import {  Injectable } from '@angular/core';
import { ILocation } from '../shared/interfaces/location';
import { UserService } from '../user/user.service';
import { CustomControlsService } from './custom-controls.service';
import { LocationService } from './location.service';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  
  constructor(private userService:UserService,private locationService:LocationService,private customControls:CustomControlsService) { }

  getAllCurrentlyPerformingMarkers(map: google.maps.Map){
    this.locationService.getAllCurrentlyPerforming().subscribe((locationsArr:Array<ILocation>)=>{
      for(let i=0;i<locationsArr.length;i++){
       
        let marker:google.maps.Marker;
        let buskerId = locationsArr[i].busker;
       
      let currUserId = this.userService.currentUser?._id.toString();
    if(currUserId===buskerId.toString()){
      continue;
      
    }
      
        
        

        let coords = new google.maps.LatLng(Number(locationsArr[i].location[0]),Number(locationsArr[i].location[1]));
        let lat=locationsArr[i].location[0];
        let lgt=locationsArr[i].location[1];
        let markedAt = locationsArr[i].markedAt;

        marker = new google.maps.Marker({
          position:coords,
          icon:'../../assets/photos/map-icon.svg',
          map:map
        })

        var innerDivContainer=this.customControls.createInfoWindowForXPerformer(buskerId,lat,lgt,markedAt);
        var infowindow = new google.maps.InfoWindow({
          content:innerDivContainer
        })
       // console.log(innerDivContainer)
        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
        }); 
        //console.log(coords);
        
        
      }
      
    })
  }
   

    
 }

 
 

 

