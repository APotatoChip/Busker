import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MapService } from './map.service';
import { LocationService } from './location.service';
import { ILocation } from '../shared/interfaces/location';
import { NgContentAst } from '@angular/compiler';
import { TagService } from './tag.service';
import { IUser } from '../shared/interfaces';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  //review using ElementRef
  @ViewChild("mapRef") mapRef?: ElementRef;
  @ViewChild("centerControlDivRef") centralControlDivRef?:ElementRef;
  @ViewChild("controlUiTagRef") controlUiTagRef?:ElementRef;
  @ViewChild("controlUiUntagRef") controlUiUntagRef?:ElementRef;
  @ViewChild("controlUiCancelRef") controlUiCancelRef?:ElementRef;
  @ViewChild("controlUiDoneRef") controlUiDoneRef?:ElementRef;
  @ViewChild("controlTextRef") controlTextRef?:ElementRef;
  
  isPerforming:boolean = false;
  isInTagMode:boolean=false;
  map?:google.maps.Map;
  user?:any;
  isPerformer?:boolean=false;

  constructor(private userService:UserService, private mapService:MapService,private locationService:LocationService, private tagService:TagService) {

  };

  // suing afterview init cause map doesnt initialize otherwise 
  ngAfterViewInit(): void {
   this.map = this.initMap(this.mapRef?.nativeElement, this.centralControlDivRef?.nativeElement);   
    //change detection for isPerfmoring because initial value is sometimes false cause of lifecycle hook
    // later check for the angular way implementation  
      setTimeout(()=>{
          this.isPerforming=this.locationService.isPerforming;
},100) 
}  
  
 
 //Function for initializing the map with center - Sofia
 initMap(mapRef:any, centerControlDivRef:HTMLElement): google.maps.Map {
  
  const sofiaLngLat  = new google.maps.LatLng(42.698334, 23.319941);
  const mapOptions: google.maps.MapOptions = {
    center: sofiaLngLat,
    zoom: 12,
    mapId:'14d2223a1d38fa88',
    disableDefaultUI:true
  };

  let map: google.maps.Map;
  map = new google.maps.Map(mapRef, mapOptions);

  
  this.mapService.getAllCurrentlyPerformingMarkers(map);
  this.user=this.userService.currentUser;
  if(this.user.typeOptions=="performer"){
    this.isPerformer=true;
  }else{
    this.isPerformer=false;
  }
  this.tagService.TagYourselfControl(centerControlDivRef, map,this.isPerformer);
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(centerControlDivRef);
return map;
    }

       // tag(){  
    //   this.isInTagMode=true;
    //   console.log( this.tagService.tag(this.map as google.maps.Map,this.isPerforming));
  
    // }


    // untag(){
    //   this.isInTagMode=false
      
    // }

  }