import { MovieService } from 'src/app/core/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  nowshowingList: Movie[] | null = null;
  ngOnInit(): void {
    this.nowshowingList = this.movieService.nowshowingList.value;
    if (!this.nowshowingList) {
      this.movieService
        .layDanhSachPhimTheoNgay('01/01/2020', '01/01/2022', 1, 20)
        .subscribe({
          next: (result) => {
            this.nowshowingList = result.slice(0, 10);
            this.movieService.nowshowingList.next(this.nowshowingList);
            this.movieService.comingsoonList.next(result.slice(10));
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }
}
