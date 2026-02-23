import { AfterViewInit, Component, ElementRef, HostListener, inject, viewChild } from '@angular/core';
import { Gifs } from '../../services/gifs.service';
import { ScrollState } from '../../../shared/services/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.html',
})
export default class TrendingPage implements AfterViewInit {

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollLevel();
  }

  gifService = inject(Gifs);
  scrollStateService = inject(ScrollState);

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

    this.scrollStateService.trendingScrollLevel.set(scrollTop);

    if (totalScroll >= contentSize) {
      this.gifService.loadTrendingGifs()
    }
  }
}
