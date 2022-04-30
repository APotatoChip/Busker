import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/shared/interfaces';
import {tap,catchError} from 'rxjs/operators';
import { NgForm } from '@angular/forms';


const apiUrl=environment.apiUrl;

@Injectable({providedIn: 'root'}) 

export class UserService {

  currentUser?: IUser | null;

  get isLogged(): boolean{
    return !!this.currentUser

  }
  get isPerformer():boolean{

   let option = this.currentUser?.typeOptions;
   if (option==="viewer"){
     return false;
   }
   return true;
   
  }

  
  constructor(private http:HttpClient) {}
  
 
  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`${apiUrl}/profile`, { withCredentials: true }).pipe(
      tap(((user: any) => this.currentUser = user)),
      catchError(() => { this.currentUser = null; return of(null); })
    );
  }


  login(data:any):Observable<any>{
    return this.http.post(`${apiUrl}/login`, data,{withCredentials:true})
    .pipe(
      tap((user:any) =>  {
        localStorage.setItem("user",user.username);
        this.currentUser=user;
      })
    );
  }


  register(data: any): Observable<any> {
   
    return this.http.post(`${apiUrl}/register`, data, { withCredentials: true }).pipe(
      tap((user: any) => this.currentUser = null)
    );
  }


  logout():Observable<any>{
    return this.http.get(`${apiUrl}/logout`,{withCredentials:true})
    .pipe(
      tap(() => {
        localStorage.clear();
      this.currentUser = null})
    );
  }

  updateProfile(data: { username: string; avatar:any;instagram: string; facebook: string; twitter:string;youtube:string; }){
    console.log(data);
    
    return this.http.put<IUser>(`${apiUrl}/profile/edit`,data,{withCredentials:true}).pipe(
      tap((user)=>{
        this.currentUser=user;
      })
    )
    
  }

  getUserById(userId:any):Observable<IUser>{
    return this.http.get<IUser>(`${apiUrl}/user/${userId}`).pipe(
      tap((user)=>{
        this.currentUser=user;
      }))
  }
 
  }

