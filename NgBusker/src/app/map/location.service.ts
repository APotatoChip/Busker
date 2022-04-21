import { HttpClient, HttpParams } from '@angular/common/http';
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

  // check whether a busker has already tagged himself and if so returns true otherwise returns false
  get isPerforming():boolean{
this.getCurrentLocation().subscribe((res)=>{
  //try catch later
    this.currentLocation=res ? res.location:null;
});
console.log(!!this.currentLocation);
    return !!this.currentLocation;
  }


  constructor(private http:HttpClient) { }

  // for individual
//returns array with the coordinates
  getCurrentLocation(): Observable<any> {
    return this.http.get(`${apiUrl}/map/tag`, { withCredentials: true })
    .pipe(
      tap(((loc: any) => {
        // try catch later
        //console.log(loc);
        loc?this.currentLocation=loc:this.currentLocation=null;
      }
    )))
  }
  
  postCurrentLocation(data:Object):Observable<any>{
    return this.http.post<any>(`${apiUrl}/map/tag`, data,{withCredentials:true}).pipe(
      tap((loc:any) =>  {

        this.currentLocation=loc.location;
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

  // for all

 getAllCurrentlyPerforming():Observable<any>{
return this.http.get(`${apiUrl}/map/all`).pipe(
  tap((res)=>{
    //console.log(res);
    
  })
)
 }

 getExactLocation(lcoId:any):Observable<any>{
   return this.http.get(`${apiUrl}/map/exact/:location=`+encodeURIComponent(JSON.stringify(lcoId))
   )
 }

 getAllTaggedUsers():Observable<any>{
  return this.http.get(`${apiUrl}/map/users`).pipe(
    tap((res)=>{
    console.log(res);
    })
  )  
 }

}
