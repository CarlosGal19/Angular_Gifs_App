import { Component, ElementRef, HostListener, inject, input, viewChild } from '@angular/core';
import { IGifListItem } from '../../interfaces/gif-list-item.interface';
import { GitListItem } from "./git-list-item/git-list-item";
import { IGif } from '../../interfaces/gif.interface';
import { Gifs } from '../../services/gifs.service';

@Component({
  selector: 'gif-list',
  imports: [GitListItem],
  templateUrl: './gif-list.html',
})
export class GifList {
  gifService = inject(Gifs);
  gifs = input.required<IGif[]>();
}
