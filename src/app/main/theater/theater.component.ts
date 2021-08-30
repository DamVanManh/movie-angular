import { Component, OnInit } from '@angular/core';
import {
  Phim,
  CumRap,
  Theater,
  TheaterShowtime,
} from 'src/app/core/models/theater.models';
import { TheaterService } from 'src/app/core/services/theater.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss'],
})
export class TheaterComponent implements OnInit {
  constructor(private theaterService: TheaterService) {}
  mangHeThongRap: Theater[] | null = null;
  theaterShowtime: TheaterShowtime[] | null = null;

  maHeThongRapDangChon: string = 'CineStar';
  lstCumRap: CumRap[] | null = null;
  maCumRapDangChon: string | null = null;
  danhSachPhimDangChon: Phim[] | undefined = undefined;
  ngOnInit(): void {
    this.theaterService.LayThongTinHeThongRap().subscribe({
      next: (result) => {
        this.mangHeThongRap = result;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.getNewHubTheater(this.maHeThongRapDangChon);
  }
  getNewHubTheater(maHeThongRap: string) {
    this.theaterService.LayThongTinLichChieuHeThongRap(maHeThongRap).subscribe({
      next: (result) => {
        this.theaterShowtime = result;
        this.lstCumRap = result[0].lstCumRap;
        this.maCumRapDangChon = this.lstCumRap[0].maCumRap;
        this.danhSachPhimDangChon = this.lstCumRap[0].danhSachPhim;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  chonHeThongRap(maHeThongRap: string): void {
    if (maHeThongRap === this.maHeThongRapDangChon) return;
    this.maHeThongRapDangChon = maHeThongRap;
    this.getNewHubTheater(maHeThongRap);
  }
  chonCumRap(maCumRap: string): void {
    if (maCumRap === this.maCumRapDangChon) return;
    this.maCumRapDangChon = maCumRap;
    this.danhSachPhimDangChon = this.lstCumRap?.find(
      (cumRap) => cumRap.maCumRap === maCumRap
    )?.danhSachPhim;
  }
}
