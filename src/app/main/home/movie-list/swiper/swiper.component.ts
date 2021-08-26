import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/core/models/movie.model';
import { Input } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit {
  @Input() movieList!: Movie[];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {}
}
