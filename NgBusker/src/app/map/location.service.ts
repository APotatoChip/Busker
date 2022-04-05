import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }
  postCurrentLocation(data:any):Observable<any>{
    return this.http.post(`${apiUrl}/home/map/tag`, data,{withCredentials:true})
    // .pipe(
    //   tap((user:any) =>  {
    //     this.currentUser=user;
    //   })
    // );
  }

}
