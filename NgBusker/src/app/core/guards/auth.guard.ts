import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "src/app/user/user.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private userService:UserService,
        private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        const isLoggedFromData = route.data.isLogged;
        if(typeof isLoggedFromData==="boolean" && isLoggedFromData===this.userService.isLogged){
            return true;
        }
        const url = this.router.url;
        this.router.navigate([url]);
        return false;
    }
}