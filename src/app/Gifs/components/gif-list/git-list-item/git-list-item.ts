import { Component, input } from '@angular/core';
import { IGifListItem } from '../../../interfaces/gif-list-item.interface';
import { IGif } from '../../../interfaces/gif.interface';

@Component({
  selector: 'git-list-item',
  imports: [],
  templateUrl: './git-list-item.html',
})
export class GitListItem {
  gif = input.required<IGif>();
}
