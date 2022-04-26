import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/map/location.service';
import { IUser } from '../../interfaces';
import {  faInstagram, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css']
})
export class CurrentUserComponent implements OnInit,OnDestroy {
username?:any;
type?:any;
avatar?:any;
userId?:String;
twitter?:any;
instagram?:any;
facebook?:any;
youtube?:any;
faInstagram = faInstagram;
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faYoutube=faYoutube;

   
  
  constructor(private locationService:LocationService,private router:Router) {
   
    
    
   }
  ngOnDestroy(): void {
    localStorage.clear();
  }

  ngOnInit(): void {
    
    
    this.userId = this.router.url.split("/")[2];
    
    this.locationService.getUserById(this.userId).subscribe((currUser:any)=>{
      console.log(currUser[0]);
      
      localStorage.setItem("current-user-username",currUser[0].username);
      localStorage.setItem("current-user-avatar",currUser[0].avatar);
      localStorage.setItem("current-user-type-options",currUser[0].typeOptions);
      localStorage.setItem("current-user-twitter",currUser[0].twitter);
      localStorage.setItem("current-user-facebook",currUser[0].facebook);
      localStorage.setItem("current-user-instagram",currUser[0].instagram);
      localStorage.setItem("current-user-youtube",currUser[0].youtube);
      
    });
   
   this.username=localStorage.getItem("current-user-username");
   this.avatar=localStorage.getItem("current-user-avatar");
   this.type=localStorage.getItem("current-user-type-options");
   this.twitter=localStorage.getItem("current-user-twitter");
   this.facebook=localStorage.getItem("current-user-facebook");
   this.instagram=localStorage.getItem("current-user-instagram");
   this.youtube=localStorage.getItem("current-user-youtube");
      
  }

}
