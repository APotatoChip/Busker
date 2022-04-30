import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

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
  get isLogged():boolean{

    return this.userService.isLogged;;
  }
  ngOnInit(): void {
    console.log(this.isLogged);
    
    this.isPerformer = this.userService.isPerformer;
    if(this.router.url.includes("profile")){
      this.isOther=false;
    }else{
      this.isOther=true;
    }
    //console.log(this.isOther);
    
  }
  

}
