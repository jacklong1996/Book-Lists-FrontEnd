import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { SidebarComponent } from '../ui/sidebar/sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  @Output() toggleEmitter = new EventEmitter();    
  subsVar: Subscription; 

  constructor() { }

  toggleSidebar() {
    //console.log("Toggle Service");
    this.toggleEmitter.emit();
  }
}
