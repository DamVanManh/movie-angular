import { Component, OnInit, OnChanges } from '@angular/core';
import {
  DanhSachPhim,
  LstCumRap,
  LstLichChieuTheoPhim,
  Theater,
  TheaterShowtime,
} from 'src/app/core/models/theater.models';
import { TheaterService } from 'src/app/core/services/theater.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss'],
})
export class TheaterComponent implements OnInit, OnChanges {
  constructor(private theaterService: TheaterService) {}
  allTheater: Theater[] | null = null;
  theaterShowtime: TheaterShowtime[] | null = null;
  selectedHubTheater: string = 'CineStar';
  lstCumRap: LstCumRap[] | null = null;
  selectedTheaterCode: string | null = null;
  phim: DanhSachPhim | null = null;
  ngOnInit(): void {
    this.theaterService.LayThongTinHeThongRap().subscribe({
      next: (result) => {
        this.allTheater = result;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.getNewHubTheater(this.selectedHubTheater);
  }
  ngOnChanges() {
    // changes.prop contains the old and the new value...
  }
  getNewHubTheater(maHeThongRap: string) {
    this.theaterService.LayThongTinLichChieuHeThongRap(maHeThongRap).subscribe({
      next: (result) => {
        this.theaterShowtime = result;
        this.lstCumRap = result[0].lstCumRap;
        this.selectedTheaterCode = this.lstCumRap[0].maCumRap;
        this.phim = this.lstCumRap[0].danhSachPhim[0];
        console.log('giá trị lấy về ', result, this.phim);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  selectHubTheater(maHeThongRap: string): void {
    if (maHeThongRap === this.selectedHubTheater) return;
    this.selectedHubTheater = maHeThongRap;
    this.getNewHubTheater(maHeThongRap);
  }
  selectTheater(maCumRap: string): void {
    if (maCumRap === this.selectedTheaterCode) return;
    this.selectedTheaterCode = maCumRap;
    // this.getNewHubTheater(maHeThongRap);
  }
}
