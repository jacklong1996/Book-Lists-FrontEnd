import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  routeURL: string;
  isLoggedIn:boolean = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { 
    this.routeURL = this.router.url;
  }

  ngOnInit(): void {
    //this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      //this.roles = user.roles;

      this.username = user.username;
    }
  }

  canActivate(route, state) {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.username = this.tokenStorageService.getUser().username;
    }

    if (this.isLoggedIn) {
      //this.routeURL = this.router.url;
      this.routeURL = state.url;
      //this.router.navigate([this.routeURL]);
      //this.router.navigate(['/books']);
      //console.log("Returning true.");
      return true;
    } else {
      //console.log("Returning false.")
      //this.routeURL = '/login';
      /*this.router.navigate(['/login'], {
        queryParams: {
          return: 'login'
        }
      });*/
      this.router.navigate(['/login']);
     return false;
    }
}
}
