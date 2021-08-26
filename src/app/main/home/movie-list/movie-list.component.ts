import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/core/models/movie.model';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  nowshowingList: Movie[] = [];
  comingsoonList: Movie[] = [];
  show: boolean = true;
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService
      .layDanhSachPhimTheoNgay('01/01/2020', '01/01/2022', 1, 20)
      .subscribe({
        next: (result) => {
          this.nowshowingList = result.splice(0, 10);
          this.comingsoonList = result;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  activeNowShowing() {
    this.show = true;
  }
  activeComingsoon() {
    this.show = false;
  }
}
