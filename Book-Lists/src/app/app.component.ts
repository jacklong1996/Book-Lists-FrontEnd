import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './service/token-storage.service';
//import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularbootstrap';
  private roles: string[] = [];
  routeURL: string;
  isLoggedIn = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { 
    this.routeURL = router.url;
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  canActivate(): boolean {
    if (this.isLoggedIn) {
     return true;
    } else {
      this.routeURL = '/login';
      /*this.router.navigate(['/login'], {
        queryParams: {
          return: 'login'
        }
      });*/
      this.router.navigate(['/login'])
     return false;
    }
  }
}