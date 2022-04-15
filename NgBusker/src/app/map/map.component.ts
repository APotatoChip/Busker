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
  isPerforming=false;

  constructor( private mapService:MapService,private locationService:LocationService) {
    
  }
  ngAfterViewInit(): void {
    //hacking the problem with async loading (not a good practice wtf am I doin? check later)
    setTimeout(()=>{
      this.mapService.initMap(this.mapRef?.nativeElement, this.centralControlDivRef?.nativeElement);
    },1000)
    
  }
  
// ngAfterViewChecked(): void {
//     this.isPerforming=this.locationService.isPerforming
// }
  
// ngDoCheck(): void {
//   this.isPerforming=this.locationService.isPerforming;
    
// }
 
   
  }
    
  




