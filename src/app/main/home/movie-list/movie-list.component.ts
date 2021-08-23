import { Component, OnInit } from '@angular/core';
// B1: import movie service
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/core/models/movie.model';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];

  // B2: Khai báo movie service trong constructor
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    // Demo Observable
    this.movieService.getMovieList().subscribe({
      // Khi nhận kết quả
      next: (result) => {
        this.movieList = result;
        console.log(this.movieList);
      },
      // Khi nhận lỗi
      error: (error) => {
        console.log(error);
      },
      // Khi kết thúc
      complete: () => {
        console.log('DONE');
      },
    });
  }
}







