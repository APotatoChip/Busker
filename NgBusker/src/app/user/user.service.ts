import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogged=false;

  constructor() { }

  login(data:any):Observable<any>{
    this.isLogged=true;
  return of(data).pipe(delay(3000));

  }

  logout():void{
    this.isLogged=false;
  }
}
