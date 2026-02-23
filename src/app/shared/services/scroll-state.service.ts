import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollState {
  trendingScrollLevel = signal(0);
}
