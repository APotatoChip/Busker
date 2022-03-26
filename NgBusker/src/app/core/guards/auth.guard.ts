import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "src/app/user/user.service";
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { IUser } from 'src/app/shared/interfaces';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private userService: UserService,
        private router: Router
      ) { }
    
      canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let stream$: Observable<IUser | null>;
        if (this.userService.currentUser === undefined) {
          stream$ = this.userService.getCurrentUserProfile();
        } else {
          stream$ = of(this.userService.currentUser);
        }
    
        return stream$.pipe(
          map((user) => {
            const isLoggedFromData = childRoute.data.isLogged;
            return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
          }),
          tap((canContinue) => {
            if (canContinue) { return; }
            const url = this.router.url;
            this.router.navigateByUrl(url);
          }),
        );
      }
}