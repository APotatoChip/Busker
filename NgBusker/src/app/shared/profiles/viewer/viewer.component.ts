import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
username:any;
  constructor(private userService:UserService) { 
    this.username=this.userService.currentUser?.username;
  }

  ngOnInit(): void {

    
  }

}
