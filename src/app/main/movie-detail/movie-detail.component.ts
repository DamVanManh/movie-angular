import { Component, OnInit, OnDestroy } from '@angular/core';

import { MovieService } from 'src/app/core/services/movie.service';
import { Movie, ShowTimes } from 'src/app/core/models/movie.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movieDetail!: Movie;
  showTimes: ShowTimes[] = [];

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        // get movie
        this.movieService.getMovieDetail(params.movieId).subscribe({
          next: (result) => {
            const { lichChieu, ...detail } = result;
            this.movieDetail = detail;
            this.showTimes = lichChieu;
          },
          error: (error) => {
            console.log(error);
          },
        });
        // save movieId for hightlight menu
        this.movieService.currentMovieId.next(params.movieId);
      },
    });
  }
  ngOnDestroy(): void {
    // reset movieId
    this.movieService.currentMovieId.next(null);
  }
}
