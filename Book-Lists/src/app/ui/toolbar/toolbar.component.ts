import { ElementRef, Input } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleService } from 'src/app/service/toggle.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('search') searchElement: ElementRef;
  isShown: boolean;
  search: string;

  constructor(private sidebarServ: ToggleService, private tokenServ: TokenStorageService,  private router: Router) { }
  //constuctor() {}

  ngOnInit(): void {
    this.isShown = false;
  }

  openSidenav() {
    //this.sidebarServ.toggleSidebar();
    this.sidebarServ.toggleSidebar();
  }

  openSearch() {
    //this.search.hidden = !this.search.hidden;
    /*this.search.nativeElement.setAttribute("hidden", "true");
    console.log("openSearch");
    console.log(this.search1.hidden);*/
    
    if (this.isShown) {
      this.search = this.searchElement.nativeElement.value;
      this.router.navigateByUrl(`/search/${this.search}`);
    } else 
      this.isShown = !this.isShown;
  }
  logout() {
    this.tokenServ.signOut();
    window.location.reload();
  }
}
