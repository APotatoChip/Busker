import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
isPerformerType?:boolean;
  constructor(private userService:UserService) { 
  
  }

  ngOnInit(): void {
    
    this.isPerformerType = this.userService.isPerformer;
   
  }

}
