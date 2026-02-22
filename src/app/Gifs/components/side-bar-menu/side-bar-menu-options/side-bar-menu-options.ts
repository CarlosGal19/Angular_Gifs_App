import { Component, signal } from '@angular/core';
import { INavigationOption } from '../../../interfaces/navigation-option.interface';
import { SideBarMenuOption } from '../side-bar-menu-option/side-bar-menu-option';

@Component({
  selector: 'side-bar-menu-options',
  imports: [SideBarMenuOption],
  templateUrl: './side-bar-menu-options.html',
})
export class SideBarMenuOptions {
  sideBarOptions = signal<INavigationOption[]>([
    {
      name: 'Trending',
      description: 'Popular images',
      link: 'trending',
      svg: 'M4 5V19C4 19.5523 4.44772 20 5 20H19 M18 9L13 13.9999L10.5 11.4998L7 14.9998'
    },
    {
      name: 'Search',
      description: 'Search gifs',
      link: 'search',
      svg: 'M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
    }
  ]);
}
