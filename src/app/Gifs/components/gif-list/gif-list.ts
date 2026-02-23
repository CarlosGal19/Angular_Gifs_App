import { Component, ElementRef, HostListener, input, viewChild } from '@angular/core';
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

  scrollDivRef = viewChild<ElementRef>('groupDiv')

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    // const scrollOffset = (event.target as HTMLElement).scrollTop;
    // console.log('Scroll position:', scrollOffset);
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    console.log(scrollDiv);
  }
}
