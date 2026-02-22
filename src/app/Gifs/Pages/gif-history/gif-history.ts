import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { IGif } from '../../interfaces/gif.interface';
import { Gifs } from '../../services/gifs.service';
import { GitListItem } from "../../components/gif-list/git-list-item/git-list-item";

@Component({
  selector: 'app-gif-history',
  imports: [GitListItem],
  templateUrl: './gif-history.html',
})
export default class GifHistory {
  gifService = inject(Gifs);
  queryParam = signal('');
  gifs = signal<IGif[]>([])
  // query = inject(ActivatedRoute).params.subscribe(data => {
  //   this.queryParam.set(data['query'])
  // });
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => {
        return params['query']
      }),
      tap((param) => {
        this.gifs.set(this.gifService.getHistoryGifs(param));
      })
    )
  )
}
