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
  flowList: Movie[] | null = null;
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.flowList = this.movieService.flowList.value;
    if (!this.flowList) {
      this.movieService
        .layDanhSachPhimTheoNgay('01/01/2020', '01/01/2022', 2, 20)
        .subscribe({
          next: (result) => {
            this.flowList = result;
            this.movieService.flowList.next(result);
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }
}
