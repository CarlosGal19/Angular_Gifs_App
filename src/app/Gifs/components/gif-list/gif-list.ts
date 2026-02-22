import { Component, input } from '@angular/core';
import { IGifListItem } from '../../interfaces/gif-list-item.interface';
import { GitListItem } from "./git-list-item/git-list-item";
import { IGif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gif-list',
  imports: [GitListItem],
  templateUrl: './gif-list.html',
})
export class GifList {
  gifs = input.required<IGif[]>();
}
