import { Component, input } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'side-bar-menu-option',
  imports: [RouterLinkActive, RouterLinkWithHref],
  templateUrl: './side-bar-menu-option.html',
})
export class SideBarMenuOption {
  link = input.required<string>();
  name = input.required<string>();
  description = input.required<string>();
  svg = input.required<string>();
}
