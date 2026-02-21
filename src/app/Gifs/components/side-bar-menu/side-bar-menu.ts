import { Component } from '@angular/core';
import { SideBarMenuOptions } from "../side-bar-menu-options/side-bar-menu-options";
import { SideBarMenuHeader } from "../side-bar-menu-header/side-bar-menu-header";

@Component({
  selector: 'side-bar-menu',
  imports: [SideBarMenuOptions, SideBarMenuHeader],
  templateUrl: './side-bar-menu.html',
})
export class SideBarMenu {

}
