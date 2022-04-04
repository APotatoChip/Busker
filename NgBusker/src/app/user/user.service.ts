import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import {tap,catchError} from 'rxjs/operators';


const apiUrl=environment.apiUrl;

@Injectable({providedIn: 'root'}) 

export class UserService {

  currentUser?: IUser | null;

  get isPerformer():boolean{

   let option = this.currentUser?.typeOptions;
   if (option==="viewer"){
     return false;
   }
   return true;
   
  }

  get isLogged(): boolean{
    
    return !!this.currentUser

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
        this.currentUser=user;
      })
    );
  }


  register(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/register`, data, { withCredentials: true }).pipe(
      tap((user: any) => this.currentUser = user)
    );
  }


  logout():Observable<any>{
    return this.http.get(`${apiUrl}/logout`,{withCredentials:true})
    .pipe(
      tap(() => {
      this.currentUser = null})
    );
  }

 
  }

