import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoading=false;
  errMsg:string='null';

typeOptions=[{name:"Busker", id:1,checked:false}, {name:"Viewer", id:2,checked:false}];
  form = {
    email:"",
    userName:"",
    password:"",
    rePassword:""
  }

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }


  sumbitFormHandler(formValue:{email:string, username:string, password:string,typeOptions:string}):void{
    
    this.isLoading=true;
  
    const {email,username,password,typeOptions} = formValue;
  //  console.log(email,username,password,typeOptions);

    this.userService.register({email,username,password,typeOptions}).subscribe({
      next:()=>{
        this.isLoading=false;
        this.router.navigate(['/user/login']);
      },
      error:(err)=>{
        console.error(err);
        this.isLoading=false;
        return err;
      }
    });
 
  }

}
