import { Component, OnInit } from '@angular/core';

import { MovieService } from 'src/app/core/services/movie.service';
import { Movie, ShowTimes } from 'src/app/core/models/movie.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movieDetail: Movie | null = null;
  showTimes: ShowTimes[] = [];

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // B1: Cần lấy mã phim từ trên url
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        // B2: Dùng mã phim gọi API lấy thông tin phim
        this.movieService.getMovieDetail(params.movieId).subscribe({
          next: (result) => {
            const { lichChieu, ...detail } = result;
            this.movieDetail = detail;
            this.showTimes = lichChieu;
            console.log(this.movieDetail);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });
  }
}
