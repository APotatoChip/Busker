import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';


const apiUrl=environment.apiUrl;

@Injectable({providedIn: 'root'}) 

export class UserService {

  // currentUser: any;

  get isLogged(): boolean{
    return !!this.document.cookie;
  }
  
  constructor(private http:HttpClient,@Inject(DOCUMENT) private document: Document) {
    //  this.currentUser = this.currentUser ? this.document.cookie : null;
  }
  
 
  login(data:any):Observable<any>{
  
    return this.http.post(`${apiUrl}/login`, data,{withCredentials:true})
    // .pipe(
    //   tap((user:any) =>  {
    //     this.currentUser=user;
    //   })
    // );
    
  }

   register(data:any):Observable<any>{

    return this.http.post(`${apiUrl}/register`,data,{withCredentials:true})
    // .pipe(
    //   tap((user:any) => this.currentUser = user)
    // );
  }


  logout():Observable<any>{
 
    return this.http.get(`${apiUrl}/logout`,{withCredentials:true})
    // .pipe(
    //   tap(() => {
    //   this.currentUser = null})
    // );
  }

 
  }

