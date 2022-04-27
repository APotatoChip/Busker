import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UploadFileService } from '../shared/profiles/upload-file.service';
import { UserService } from '../user/user.service';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class CustomControlsService {

  constructor(private userService:UserService, private locationService:LocationService, private sanitizer:DomSanitizer, private uploadService:UploadFileService) { }
  //should be removed
   createMapCustomControls():Array<HTMLElement>{
    // Creating tag/untag control ui and text elements
    const controlUI = document.createElement("div");
    controlUI.classList.add("control-ui");
    const controlText = document.createElement("div");
    controlText.className="control-text";
    controlText.innerHTML = "Tag Yourself";
    controlUI.appendChild(controlText);

    // Creating done button control ui and text elements
    const controlUIDone = document.createElement("div");
    controlUIDone.classList.add("control-ui");
    controlUIDone.style.display="none";
    const controlTextDone = document.createElement("div");
    controlTextDone.classList.add("control-text");
    controlTextDone.innerHTML="Done";
    controlUIDone.appendChild(controlTextDone);

    // Creating cancel button control ui and text elements
    const controlUICancel = document.createElement("div");
    controlUICancel.classList.add("control-ui");
    controlUICancel.style.display="none";
    const controlTextCancel = document.createElement("div");
    controlTextCancel.classList.add("control-text");
    controlTextCancel.innerHTML = "Cancel";
    controlUICancel.appendChild(controlTextCancel);
      return [controlUI,controlText,controlUIDone,controlTextDone,controlUICancel,controlTextCancel];
    }

     
    // Function for creating info-window //
     createInfoWindow(userService:UserService):HTMLElement{
      // Creating info-window
      const innnerDivContainer = document.createElement("div");
      innnerDivContainer.className="info-window";
      var infowindow:google.maps.InfoWindow;
      //Creating the elements for the info-window, retrieving info about them from the db through the userService
      let nameElement=document.createElement("h3");
      this.userService.getCurrentUserProfile().subscribe((user:any)=>{
        let {avatar}=user;
        nameElement.innerHTML="You";
        
      let imageElement = document.createElement("img");
      imageElement.classList.add("profile-pic");
      //imageElement.src=avatar;
      let currUser=this.userService.currentUser;
      //property binding later do display image + refactor -> template
      let imgUrl=currUser?.avatar.split("\\")[2];
      //retrieving the image from the backend static folder as a blob, sanitazing url and displaying it 
      
      this.uploadService.getAvatar(imgUrl).subscribe((img:any)=>{
        
         const objectURL  =URL.createObjectURL(img);
         const test = this.sanitizer.bypassSecurityTrustUrl(objectURL);
         //this.urlBlob=test;
         
         imageElement.src=test as any;
         return imageElement;
  
      });
      
      let locationNameElement = document.createElement("p");
      // Getting the location and reverse geocoding it to retrieve the name of the place
         this.locationService.getCurrentLocation().subscribe((res)=>{
          const latLng={
            lat:parseFloat(res.location[0]),
            lng: parseFloat(res.location[1])
          }
                  const geoCoder= new google.maps.Geocoder();
                  geoCoder.geocode({location:latLng})
                  .then((res)=>{
                    locationNameElement.innerHTML=res.results[0].formatted_address;
                    
                  })    
        });
        
      
      let taggedTimeElement=document.createElement("p");
      taggedTimeElement.innerHTML="3h ago";
      let viewProfileBtnElement=document.createElement("a");
      viewProfileBtnElement.classList.add("view-profile-btn");
      viewProfileBtnElement.textContent="View Profile";
      viewProfileBtnElement.href="/user/profile";
     
      
      innnerDivContainer.appendChild(imageElement);
      innnerDivContainer.appendChild(nameElement);
      innnerDivContainer.appendChild(locationNameElement);
      innnerDivContainer.appendChild(taggedTimeElement);
      innnerDivContainer.appendChild(viewProfileBtnElement);
      // Instantiating the new info-window with the elements from above
      
    });      
    return innnerDivContainer;
  }

  createInfoWindowForXPerformer(buskerId:any,lat:any,lng:any,markedAt:any){
     // Creating info-window
     const innnerDivContainer = document.createElement("div");
     innnerDivContainer.className="info-window";
     var infowindow:google.maps.InfoWindow;
     //Creating the elements for the info-window, retrieving info about them from the db through the userService
     let nameElement=document.createElement("h3");
     this.locationService.getUserById(buskerId).subscribe((user:any)=>{
       
       let {avatar, username}=user[0];
       console.log(user[0]);
       nameElement.innerHTML=username;
       
     let imageElement = document.createElement("img");
     imageElement.classList.add("profile-pic");
     imageElement.src=avatar;
     let locationNameElement = document.createElement("p");
     // Getting the location and reverse geocoding it to retrieve the name of the place
       
         const latLng={
           lat:parseFloat(lat),
           lng: parseFloat(lng)
         }
                 const geoCoder= new google.maps.Geocoder();
                 geoCoder.geocode({location:latLng})
                 .then((res)=>{
                   locationNameElement.innerHTML=res.results[0].formatted_address;
                   
                 })    
       
       
     
     let taggedTimeElement=document.createElement("p");
     taggedTimeElement.innerHTML=markedAt;
     let viewProfileBtnElement=document.createElement("a");
     viewProfileBtnElement.classList.add("view-profile-btn");
     viewProfileBtnElement.textContent="View Profile";
     viewProfileBtnElement.href=`/user/${user[0]._id}`;
     
     innnerDivContainer.appendChild(imageElement);
     innnerDivContainer.appendChild(nameElement);
     innnerDivContainer.appendChild(locationNameElement);
     innnerDivContainer.appendChild(taggedTimeElement);
     innnerDivContainer.appendChild(viewProfileBtnElement);
     // Instantiating the new info-window with the elements from above
     
   });      
   return innnerDivContainer;
  }
}

