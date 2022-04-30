import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from 'src/app/feature/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,DoCheck {
  user?:any;
 isLogged:any=false;
  
  constructor(private userService:UserService) {  }

  ngOnInit(): void {
    this.user=this.userService.getCurrentUserProfile().subscribe((res)=>{
      console.log(res);
      
    });
    
  }
  ngDoCheck(): void {
   
   
  
  }
      

}
