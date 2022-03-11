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
  errMsg:string='null';
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
    const {email ,password}=this.form;
    this.userService.login({email,password}).subscribe(()=>{
      this.isLoading=false;
      this.router.navigate(['/user/profile']);
    },(err:any)=>{
      this.errMsg="Eror";
      this.isLoading=false;
      return err;

    });
    
    
  }
}
