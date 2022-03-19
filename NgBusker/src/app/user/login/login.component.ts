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

  isLoading=false;


  form = {
    email:"",
    password:""
  }

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  updateInputValue(name: 'email' | 'password',value:string):void{
    this.form[name]=value;
  }

  submitFormHandler(formValue:{email:string, password:string}):void{

    this.isLoading=true;
    const {email ,password}=formValue;
    
    this.userService.login({email,password}).subscribe({
    
      next:()=>{
        this.isLoading=false;
  
        this.router.navigate(['/user/profile']);
      },
    error:(err)=>{
      console.error(err);
      this.isLoading=false;
      return err;
    }    
  });
  console.log("Login Completed!");
  
}

}
