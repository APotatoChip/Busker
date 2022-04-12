import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomControlsService {

  constructor(private userService:UserService) { }
  
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
      userService.getCurrentUserProfile().subscribe((user:any)=>{
        let {avatar, username,location}=user;
        let nameElement=document.createElement("h3");
        nameElement.innerHTML=username;
        
      let imageElement = document.createElement("img");
      imageElement.classList.add("profile-pic");
      imageElement.src=avatar;
  
      let locationNameElement = document.createElement("p");
      locationNameElement.innerHTML=location
      let taggedTimeElement=document.createElement("p");
      taggedTimeElement.innerHTML="3h ago";
      let viewProfileBtnElement=document.createElement("button");
      viewProfileBtnElement.classList.add("view-profile-btn");
      viewProfileBtnElement.textContent="View Profile";
      
      innnerDivContainer.appendChild(imageElement);
      innnerDivContainer.appendChild(locationNameElement);
      innnerDivContainer.appendChild(taggedTimeElement);
      innnerDivContainer.appendChild(viewProfileBtnElement);
      innnerDivContainer.appendChild(nameElement);
      // Instantiating the new info-window with the elements from above
      
    });      
    return innnerDivContainer;
  }
}

