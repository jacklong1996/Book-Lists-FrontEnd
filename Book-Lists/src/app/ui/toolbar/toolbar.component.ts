import { ElementRef, Input } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToggleService } from 'src/app/service/toggle.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isShown: boolean;

  constructor(private sidebarServ: ToggleService) { }

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
    this.isShown = !this.isShown;
  }
}
