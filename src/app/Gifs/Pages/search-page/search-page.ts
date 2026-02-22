import { Gifs } from './../../services/gifs.service';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { IGif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPage {
  gifService = inject(Gifs);
  gifs = signal<IGif[]>([])

  onSearch(input: string) {
    if (!input) return;
    this.gifService.searchGifs(input).subscribe((data) => {
      this.gifs.set(data);
    })
  }

}
