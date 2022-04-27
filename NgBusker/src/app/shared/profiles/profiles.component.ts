import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
isPerformer?:boolean;
isOther?:boolean;
  constructor(private userService:UserService, private router:Router) { 
  
  }

  ngOnInit(): void {
    this.isPerformer = this.userService.isPerformer;
    if(this.router.url.includes("profile")){
      this.isOther=false;
    }else{
      this.isOther=true;
    }
    //console.log(this.isOther);
    
  }
  

}
