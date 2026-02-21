import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'side-bar-menu-header',
  imports: [],
  templateUrl: './side-bar-menu-header.html',
})
export class SideBarMenuHeader {
  envs = environment
}
