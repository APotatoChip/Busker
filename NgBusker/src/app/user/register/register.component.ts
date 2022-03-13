import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None //for input fields to show properly css
})
export class RegisterComponent implements OnInit {

  isLoading=false;
  errMsg:string='null';
selectedRadio:any;
radioOptions=[{name:"Busker", id:1,checked:false}, {name:"Viewer", id:2,checked:false}];
  form = {
    email:"",
    userName:"",
    password:"",
    rePassword:""
  }

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }


  sumbitFormHandler(formValue:{email:string, userName:string, password:string, rePassword:string}):void{
    
    this.isLoading=true;
   
    
    const {email,userName} = this.form;
    //register userservice
  }

}
