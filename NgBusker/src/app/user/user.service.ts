import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


const apiUrl=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogged=false;
    

  constructor(private http:HttpClient) {
    if(decodeURIComponent(document.cookie)){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

  }

 
  login(data:Object):Observable<any>{
    this.isLogged=true;
    return this.http.post(`${apiUrl}/login`, data,{withCredentials:true});
  }

   register(data:any):Observable<any>{
    this.isLogged=false;
    return this.http.post(`${apiUrl}/register`,data);
  }


  logout():Observable<any>{
    this.isLogged=false;
    console.log(this.http.get(`${apiUrl}/logout`,{withCredentials:true}));
    
    return this.http.get(`${apiUrl}/logout`,{withCredentials:true});
  }
}
