import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { SidebarComponent } from '../ui/sidebar/sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  toggleEmitter = new EventEmitter();    
  subsVar: Subscription; 

  constructor() { }

  toggleSidebar() {
    this.toggleEmitter.emit();
  }
}
