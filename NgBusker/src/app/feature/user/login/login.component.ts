import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None //for input fields to show properly css
})

export class LoginComponent implements OnInit {

  get isLogged():boolean {
    return this.userService.isLogged;
  }

  isLoading=false;
errorMessage="";

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

 
  submitFormHandler(formValue:{email:string, password:string}):void{

    this.isLoading=true;
    this.errorMessage='';
    const {email ,password}=formValue;
    
    this.userService.login({email,password}).subscribe({
    
      next:()=>{
        this.isLoading=false;
        this.router.navigate(['/user/profile']);
    
      },
    error:(err)=>{
      console.error(err);
      this.errorMessage="ERROR!";
      this.isLoading=false;
      return err;
    }    
  });
 
  
}

}
