import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IGiphyResponse } from '../interfaces/giphy-response.interface';

@Injectable({
  providedIn: 'root',
})
export class Gifs {
  private readonly http = inject(HttpClient);

  loadTrendingGifs() {
    return this.http.get<IGiphyResponse>('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: 'J8iuleh1ka5NCkp8tEgwpNnHsy5ne7zy',
        limit: 25,
        offset: 0,
        rating: 'g',
        bundle: 'messaging_non_clips'
      }
    });
  }
}
