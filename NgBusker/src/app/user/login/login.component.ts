import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
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

  submitFormHandler():void{
    this.errMsg='';
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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(8)
      
  ]);

  matcher = new MyErrorStateMatcher();

}
