import { IGif } from './../interfaces/gif.interface';
import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { IGiphyResponse } from '../interfaces/giphy-response.interface';
import { map, tap } from 'rxjs';

const loadHistorial = () => {
  const historial = JSON.parse(localStorage.getItem('gifsHistory') ?? '{}') as Record<string, IGif[]>

  return historial;
}

@Injectable({
  providedIn: 'root',
})
export class Gifs {
  private readonly http = inject(HttpClient);
  trendingGifs = signal<IGif[]>([]);
  trendingGifsLoading = signal(false);

  private trendingPage = signal(0);

  trendingGifsGroup = computed(() => {
    const groups: IGif[][] = [];

    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3))
    }

    return groups;
  })

  historial = signal<Record<string, IGif[]>>(loadHistorial());
  historialKeys = computed(() => Object.keys(this.historial()))

  // searchedGifs = signal<IGif[]>([]);
  // searchedGifsLoading = signal(true);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {

    if (this.trendingGifsLoading()) return;

    this.trendingGifsLoading.set(true);

    this.http.get<IGiphyResponse>('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: 'J8iuleh1ka5NCkp8tEgwpNnHsy5ne7zy',
        limit: 25,
        offset: this.trendingPage() * 0,
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
      this.trendingGifs.update(currentGifs => [...currentGifs, ...gifs]);
      this.trendingGifsLoading.set(false);
      this.trendingPage.update(current => current++);
      // console.log(this.trendingGifs())
    })
  }

  searchGifs(query: string) {
    return this.http.get<IGiphyResponse>('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'J8iuleh1ka5NCkp8tEgwpNnHsy5ne7zy',
        limit: 25,
        offset: 0,
        rating: 'g',
        bundle: 'messaging_non_clips',
        q: query,
      }
    })
      .pipe(
        map(data => {
          const gifs: IGif[] = data.data.map((item) => {
            return {
              id: item.id,
              title: item.title,
              url: item.images.original.url,
            }
          });

          return gifs;
        }),
        tap((data) => {
          this.historial.update(current => ({
            ...current,
            [query.toLocaleLowerCase()]: data
          }))
        })
      )
    // .subscribe(data => {
    // const gifs: IGif[] = data.data.map((item) => {
    // return {
    // id: item.id,
    // title: item.title,
    // url: item.images.original.url,
    // }
    // });
    // this.searchedGifs.set(gifs);
    // this.searchedGifsLoading.set(false);
    // console.log(this.searchedGifs())
    // })
  }

  getHistoryGifs(key: string) {
    return this.historial()[key] ?? []
  }

  saveToLocalStorage = effect(() => {
    localStorage.setItem('gifsHistory', JSON.stringify(this.historial()))
  })
}
