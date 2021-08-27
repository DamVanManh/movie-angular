import { MovieService } from 'src/app/core/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  nowshowingList: Movie[] | null = null;
  comingsoonList: Movie[] | null = null;
  show: boolean = true;
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.nowshowingList = this.movieService.nowshowingList.value;
    this.comingsoonList = this.movieService.comingsoonList.value;
    console.log('giá trị gì ');

    if (!this.nowshowingList && !this.comingsoonList) {
      this.movieService
        .layDanhSachPhimTheoNgay('01/01/2020', '01/01/2022', 1, 20)
        .subscribe({
          next: (result) => {
            this.nowshowingList = result.slice(0, 10);
            this.comingsoonList = result.slice(10);
            this.movieService.nowshowingList.next(this.nowshowingList);
            this.movieService.comingsoonList.next(this.comingsoonList);
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }
  activeNowShowing() {
    this.show = true;
  }
  activeComingsoon() {
    this.show = false;
  }
}
