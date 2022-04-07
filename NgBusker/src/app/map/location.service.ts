import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ILocation } from '../shared/interfaces/location';

const apiUrl=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  currentLocation?:ILocation | null;

  get isPerforming():boolean{
this.getCurrentLocation().subscribe((res)=>{
this.currentLocation=res;

});

    return !!this.currentLocation;
  }

  constructor(private http:HttpClient) { }

//returns array with the coordinates
  getCurrentLocation(): Observable<any> {
    return this.http.get(`${apiUrl}/map/tag`, { withCredentials: true })
    .pipe(
      tap(((location: any) => {this.currentLocation = location
      })),
      catchError(() => { this.currentLocation = null; return of(null); })
    );
  }
  
  postCurrentLocation(data:Object):Observable<any>{
    return this.http.post<any>(`${apiUrl}/map/tag`, data,{withCredentials:true}).pipe(
      tap((location:any) =>  {

        this.currentLocation=location;
      })
    );
  }

  deleteCurrentMarker():Observable<any>{
    return this.http.delete(`${apiUrl}/map/tag`,{withCredentials:true}).pipe(
      tap((): void=>{
        this.currentLocation = null; 
      })
    );
  }

}
