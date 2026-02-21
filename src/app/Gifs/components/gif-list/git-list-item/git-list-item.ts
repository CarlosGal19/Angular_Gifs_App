import { Component, input } from '@angular/core';
import { IGifListItem } from '../../../interfaces/gif-list-item.interface';

@Component({
  selector: 'git-list-item',
  imports: [],
  templateUrl: './git-list-item.html',
})
export class GitListItem {
  image = input.required<IGifListItem>();
}
