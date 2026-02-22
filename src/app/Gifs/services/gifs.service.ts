import { IGif } from './../interfaces/gif.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IGiphyResponse } from '../interfaces/giphy-response.interface';

@Injectable({
  providedIn: 'root',
})
export class Gifs {
  private readonly http = inject(HttpClient);
  trendingGifs = signal<IGif[]>([]);
  trendingGifsLoading = signal(true);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<IGiphyResponse>('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: 'J8iuleh1ka5NCkp8tEgwpNnHsy5ne7zy',
        limit: 25,
        offset: 0,
        rating: 'g',
        bundle: 'messaging_non_clips'
      }
    }).subscribe(data => {
      const gifs: IGif[] = data.data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          url: item.images.original.url,
        }
      });
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log(this.trendingGifs())
    })
  }
}
