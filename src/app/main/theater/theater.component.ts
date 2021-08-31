import { Component, OnInit } from '@angular/core';
import {
  Phim,
  CumRap,
  Theater,
  TheaterShowtime,
  LichChieuTheoPhim,
  LichChieuNgay,
  PhimAddProps,
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
  danhSachPhimDangChon: PhimAddProps[] | undefined = undefined;
  danhSachPhim?: Phim[];
  lstLichChieuPhimTheoNgay: any;
  lichChieuNgay: LichChieuNgay | {} = {};
  mangKetQua: LichChieuNgay[] | [] = [];
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
        // thêm props lstLichChieuTheoPhimVaNgay vào phim
        this.danhSachPhimDangChon = this.lstCumRap[0].danhSachPhim.map(
          (phim) => {
            return {
              ...phim,
              lstLichChieuTheoPhimVaNgay: this.taoMangLichChieuTheoNgay(
                phim.lstLichChieuTheoPhim
              ),
            };
          }
        );
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  taoMangLichChieuTheoNgay(
    lstLichChieuTheoPhim: LichChieuTheoPhim[]
  ): LichChieuNgay[] {
    return lstLichChieuTheoPhim.reduce(
      // vào từng lichChieu
      (result: LichChieuNgay[], lichChieu: LichChieuTheoPhim) => {
        let ketQua: LichChieuNgay[];
        // kiem tra lichChieu hiện tại đã có trong mảng chưa
        const index = result?.findIndex((day: LichChieuNgay) => {
          return (
            day?.ngayChieuGioChieu?.split('T')[0] ===
            lichChieu?.ngayChieuGioChieu?.split('T')[0]
          );
        });
        // nếu chưa có thì push mới
        if (index === -1) {
          ketQua = [
            ...result,
            {
              ngayChieuGioChieu: lichChieu?.ngayChieuGioChieu,
              mangLichChieu: [lichChieu],
            },
          ];
        } else {
          // có rồi thì push mảng
          result[index]?.mangLichChieu.push(lichChieu);
          ketQua = result;
        }
        return ketQua;
      },
      this.mangKetQua
    );
  }
  chonHeThongRap(maHeThongRap: string): void {
    if (maHeThongRap === this.maHeThongRapDangChon) return;
    this.maHeThongRapDangChon = maHeThongRap;
    this.getNewHubTheater(maHeThongRap);
  }
  chonCumRap(maCumRap: string): void {
    if (maCumRap === this.maCumRapDangChon) return;
    this.maCumRapDangChon = maCumRap;
    // lọc lại danh sách phim theo cụm rạp
    this.danhSachPhim = this.lstCumRap?.find(
      (cumRap) => cumRap.maCumRap === maCumRap
    )?.danhSachPhim;
    // thêm props lstLichChieuTheoPhimVaNgay vào phim
    this.danhSachPhimDangChon = this.danhSachPhim?.map((phim) => {
      return {
        ...phim,
        lstLichChieuTheoPhimVaNgay: this.taoMangLichChieuTheoNgay(
          phim.lstLichChieuTheoPhim
        ),
      };
    });
  }
}
