import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/core/models/movie.model';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-cover-flow-movie',
  templateUrl: './cover-flow-movie.html',
  styleUrls: ['./cover-flow-movie.scss'],
})
export class CoverFlowMovieComponent implements OnInit {
  nowshowingList: Movie[] = [];
  comingsoonList: Movie[] = [];
  show: boolean = true;
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService
      .layDanhSachPhimTheoNgay('01/01/2020', '01/01/2022', 1, 20)
      .subscribe({
        next: (result) => {
          const nowshowingList = result.splice(0, 10);
          this.nowshowingList = nowshowingList;
          this.comingsoonList = result;
          this.movieService.nowshowingList.next(nowshowingList);
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
