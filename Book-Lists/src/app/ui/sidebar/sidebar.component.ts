import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ToggleService } from 'src/app/service/toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  //toggleClass: boolean = false;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private toggle: ToggleService) { }

  ngOnInit(): void {
    if (this.toggle.subsVar == undefined) {
      /*this.toggle.subsVar = this.toggle.toggleSidebar.subscribe(() => {
        this.toggleSidebar();
      });*/
      this.toggle.toggleSidebar.call(this.toggleSidebar());
      this.toggle.toggleSidebar.bind(this.toggleSidebar());
    }
  }

  toggleSidebar() {
    //MatSidenav.toggle();
    //this.toggleClass = !this.toggleClass;
    //console.log("Toggle");
    this.sidenav.toggle();
  }
}
