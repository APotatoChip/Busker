import { Component, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';
import * as AOS from 'aos';
import { UserService } from 'src/app/feature/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
get isLogged():boolean{
  return this.userService.isLogged;
}
  @Output() public sidenavToggle = new EventEmitter();

 //isLogged:boolean=false;
  constructor(public userService:UserService) { 
    
  }
  

  // Needed otherwise doesnt animate on back
  ngOnInit(): void {
    
    AOS.init({
      duration: 600,
    });
}

// ngDoCheck(): void {
//     this.isLogged=localStorage.getItem("user") ? true : false;
//     ;
// }
logoutHandler():void {
  this.userService.logout().subscribe();
}

onToggleSidenav():void{
    this.sidenavToggle.emit();
  }
}
