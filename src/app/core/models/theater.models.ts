export interface Theater {
  maHeThongRap: string;
  tenHeThongRap: string;
  biDanh: string;
  logo: string;
}
export interface TheaterShowtime {
  lstCumRap: CumRap[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
  mahom: string;
}
export interface LichChieuTheoPhim {
  maLichChieu: number;
  maRap: string;
  tenRap: string;
  ngayChieuGioChieu: Date;
  giaVe: number;
}
export interface CumRap {
  danhSachPhim: Phim[];
  maCumRap: string;
  tenCumRap: string;
  diaChi: string;
}

export interface Phim {
  lstLichChieuTheoPhim: LichChieuTheoPhim[];
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
}
