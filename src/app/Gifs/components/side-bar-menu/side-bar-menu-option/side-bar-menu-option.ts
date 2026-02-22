import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'side-bar-menu-option',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './side-bar-menu-option.html',
})
export class SideBarMenuOption {
  link = input.required<string | string[]>();
  name = input.required<string>();
  description = input.required<string>();
  svg = input.required<string>();
}
