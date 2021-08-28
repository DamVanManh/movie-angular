export interface Theater {
  maHeThongRap: string;
  tenHeThongRap: string;
  biDanh: string;
  logo: string;
}
export interface TheaterShowtime {
  lstCumRap: LstCumRap[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
  mahom: string;
}
export interface LstLichChieuTheoPhim {
  maLichChieu: number;
  maRap: string;
  tenRap: string;
  ngayChieuGioChieu: Date;
  giaVe: number;
}
export interface LstCumRap {
  danhSachPhim: DanhSachPhim[];
  maCumRap: string;
  tenCumRap: string;
  diaChi: string;
}

export interface DanhSachPhim {
  lstLichChieuTheoPhim: LstLichChieuTheoPhim[];
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
}
