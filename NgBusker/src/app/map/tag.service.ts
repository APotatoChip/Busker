import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private locationService:LocationService, private userService:UserService) { }

  TagYourselfControl(controlDiv: Element, map: google.maps.Map) {
    //Remove CSS from here
   // Set CSS for the control border.
   const controlUI = document.createElement("div");
 
   
   controlUI.style.backgroundColor = "var(--accent)";
   controlUI.style.border = "2px solid var(--accent)";
   controlUI.style.borderRadius = "3px";
   controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
   controlUI.style.cursor = "pointer";
   controlUI.style.marginTop = "8px";
   controlUI.style.marginBottom = "22px";
   controlUI.style.textAlign = "center";
   controlUI.style.display="block";
   //controlUI.title = "Click to recenter the map";
   //controlDiv.appendChild(controlUI);
 
   // Set CSS for the control interior.
   const controlText = document.createElement("div");
 
   controlText.className="control-text";
   controlText.style.color = "#fff";
   controlText.style.fontFamily = "var(--main-font)";
   controlText.style.fontSize = "16px";
   controlText.style.lineHeight = "38px";
   controlText.style.paddingLeft = "5px";
   controlText.style.paddingRight = "5px";
   controlText.innerHTML = "Tag Yourself";
   controlUI.appendChild(controlText);


   // ---------------------------------
   const controlUIDone = document.createElement("div");
 
   
   controlUIDone.style.backgroundColor = "var(--accent)";
   controlUIDone.style.border = "2px solid var(--accent)";
   controlUIDone.style.borderRadius = "3px";
   controlUIDone.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
   controlUIDone.style.cursor = "pointer";
   controlUIDone.style.marginTop = "8px";
   controlUIDone.style.marginBottom = "22px";
   controlUIDone.style.textAlign = "center";
   controlUIDone.style.display="none";
   //controlUI.title = "Click to recenter the map";
   //controlDiv.appendChild(controlUIDone);
 
   // Set CSS for the control interior.
   const controlTextDone = document.createElement("div");
 
   controlTextDone.style.color = "#fff";
   controlTextDone.style.fontFamily = "var(--main-font)";
   controlTextDone.style.fontSize = "16px";
   controlTextDone.style.lineHeight = "38px";
   controlTextDone.style.paddingLeft = "5px";
   controlTextDone.style.paddingRight = "5px";
   controlTextDone.innerHTML = "Done";
   controlUIDone.appendChild(controlTextDone);

   // ---------------------------------
   const controlUICancel = document.createElement("div");
 
   
   controlUICancel.style.backgroundColor = "var(--accent)";
   controlUICancel.style.border = "2px solid var(--accent)";
   controlUICancel.style.borderRadius = "3px";
   controlUICancel.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
   controlUICancel.style.cursor = "pointer";
   controlUICancel.style.marginTop = "8px";
   controlUICancel.style.marginBottom = "22px";
   controlUICancel.style.textAlign = "center";
   controlUICancel.style.display="none";
   //controlUI.title = "Click to recenter the map";
   //controlDiv.appendChild(controlUICancel);
 
   // Set CSS for the control interior.
   const controlTextCancel = document.createElement("div");
 
   controlTextCancel.style.color = "#fff";
   controlTextCancel.style.fontFamily = "var(--main-font)";
   controlTextCancel.style.fontSize = "16px";
   controlTextCancel.style.lineHeight = "38px";
   controlTextCancel.style.paddingLeft = "5px";
   controlTextCancel.style.paddingRight = "5px";
   controlTextCancel.innerHTML = "Cancel";
   controlUICancel.appendChild(controlTextCancel);

   controlDiv.append(controlUI,controlUIDone,controlUICancel);
 
   // Setup the click event listeners: 
  
 let count:number=0;
 let marker:google.maps.Marker;


   

 //       //initial position if any on reload


this.locationService.getCurrentLocation().subscribe((res)=>{
  
  if(this.locationService.isPerforming==true){
    controlText.innerHTML ="Untag Yourself";
    
    let coords= new google.maps.LatLng(res[0],res[1]);
    
    const innnerDivContainer = document.createElement("div");
    innnerDivContainer.className="info-window";
    
   
    
    
    
    
    
    this.userService.getCurrentUserProfile().subscribe((user)=>{
      console.log(user);
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




});      


    
    
    
  var infowindow = new google.maps.InfoWindow({
    content:  innnerDivContainer,
    
  });


  

  

      marker = new google.maps.Marker({
        position:coords,
      map:map
      })
    
      
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });    
    
  }else{
   controlText.innerHTML="Tag Yourself"
  }
   
 });



 //logic for the control and marker
  
   controlUI.addEventListener("click",(e)=>{

     if(controlText.innerHTML==="Tag Yourself" ){      
    
   
     
      if(this.locationService.isPerforming===false && count==0){
           controlUI.style.display="none";
           controlUIDone.style.display="block";
           controlUICancel.style.display="block";
        
           controlUIDone.addEventListener("click",()=>{
                    
             controlUI.style.display="block";
             controlUIDone.style.display="none";
           controlUICancel.style.display="none";
          if(marker.getMap()!==null){
           this.locationService.postCurrentLocation([lat,lng]).subscribe((res)=>{

            const innnerDivContainer =document.createElement("div");
            innnerDivContainer.innerHTML="yo testhe";
            innnerDivContainer.style.color="#000";
        
            const infowindow = new google.maps.InfoWindow({
              content: innnerDivContainer,
            });
            
            marker.addListener("click", () => {
              infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
              });
            }); 
         
             controlText.innerHTML="Untag Yourself"
           });
         }else{
           controlText.innerHTML="Tag Yourself"
           google.maps.event.clearListeners(map,"click");
       
         }  

           })

           controlUICancel.addEventListener("click",()=>{
             controlUI.style.display="block";
             controlUIDone.style.display="none";
           controlUICancel.style.display="none"; 
           if(marker.getMap()!==null){
             marker.setMap(null);
             count=0;
             google.maps.event.clearListeners(map,"click");
           } else{
             google.maps.event.clearListeners(map,"click");
           }
           
           })
             let lat:any;
             let lng:any;
           
             
             {

 map.addListener("click",(mapsMouseEvent:google.maps.MapMouseEvent)=>{
   if(this.locationService.isPerforming==false && count==0){   
     
               marker = new google.maps.Marker({
                 position:mapsMouseEvent.latLng,
                 map:map
               })

                lat= marker.getPosition()?.lat().toString();
                lng = marker.getPosition()?.lng().toString()
             count=1;       
           }else{
            
             mapsMouseEvent.stop();
           }
     });
 
   }  
 }  
}else{
  
 controlText.innerHTML="Untag Yourself"
 this.locationService.deleteCurrentMarker().subscribe((res)=>{
   controlText.innerHTML="Tag Yourself"
   marker.setMap(null);
   count=0;
   google.maps.event.clearListeners(map,"click");
})
}
 

});

  }}


