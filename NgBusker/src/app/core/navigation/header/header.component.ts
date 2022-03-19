import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as AOS from 'aos';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  get isLogged():boolean {
    return this.userService.isLogged;
  }

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    AOS.init({
      duration: 600,
    });
}

loginHandler():void {


   
}

logoutHandler():void {
  this.userService.logout().subscribe({
    next:()=>{
    console.log("hi");
    
      
    },
    error:(err)=>{
      console.error(err);
    
      return err;
    }
  });
}

  public onToggleSidenav= () =>{
    this.sidenavToggle.emit();
  }

}
