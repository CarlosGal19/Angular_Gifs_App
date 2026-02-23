import { Component, ElementRef, HostListener, inject, viewChild } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { Gifs } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  // imports: [GifList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  gifService = inject(Gifs);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    // const scrollOffset = (event.target as HTMLElement).scrollTop;
    // console.log('Scroll position:', scrollOffset);
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;        // CURRENT SCROLL LEVEL
    const clientHeight = scrollDiv.clientHeight;  // SIZE OF SCREEN
    const contentSize = scrollDiv.scrollHeight;   // MAXIMU HTML ELEMENT SIZE;
    const totalScroll = scrollTop + clientHeight + 300; // LIMIT WITH 300px OF MARGIN
    if (totalScroll >= contentSize) {
      this.gifService.loadTrendingGifs()
    }
  }
}
