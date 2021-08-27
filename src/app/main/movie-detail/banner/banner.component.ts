import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/core/models/movie.model';
import { Component, Input, OnInit } from '@angular/core';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { UtilityService } from 'src/app/core/services/utility.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() movie!: Movie;
  constructor(private dialog: MatDialog, private utility: UtilityService) {}

  ngOnInit(): void {}
  openTrailer() {
    const youtubeVideoIdTrailer = this.utility.getMovieId(this.movie.trailer);
    this.dialog.open(DialogComponent, {
      data: youtubeVideoIdTrailer,
      panelClass: 'dialog_trailer',
      autoFocus: false,
    });
  }
}
