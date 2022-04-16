import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MapService } from './map.service';
import { LocationService } from './location.service';
import { ILocation } from '../shared/interfaces/location';
import { NgContentAst } from '@angular/compiler';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class MapComponent implements AfterViewInit{

  //review using ElementRef
  @ViewChild("mapRef") mapRef?: ElementRef;
  @ViewChild("centerControlDivRef") centralControlDivRef?:ElementRef;
  @ViewChild("controlUiRef") controlUiRef?:ElementRef;
  @ViewChild("controlTextRef") controlTextRef?:ElementRef;
  

  
  
  isPerforming = false;
  constructor( private mapService:MapService,private locationService:LocationService) {
    //  this.isPerforming=this.locationService.isPerforming;
  }
  
  // suing afterview init cause map doesnt initialize otherwise 
    ngAfterViewInit(): void {

    this.mapService.initMap(this.mapRef?.nativeElement, this.centralControlDivRef?.nativeElement);
   //change detection for isPerfmoring because initial value is sometimes false cause of lifecycle hook
      setTimeout(()=>{
        this.isPerforming=this.locationService.isPerforming;
      },50)
     
    
    
  }  }
    
  




