import { Injectable } from '@angular/core';
import { Movie, MovieDetail } from '../models/movie.model';

import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  nowshowingList = new BehaviorSubject<Movie[] | null>(null);
  comingsoonList = new BehaviorSubject<Movie[] | null>(null);
  constructor(private http: HttpClient) {}

  getMovieList(): Observable<Movie[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09';

    return this.http.get<Movie[]>(url);
  }

  getMovieDetail(movieId: string): Observable<MovieDetail> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim`;

    let params = new HttpParams();
    params = params.append('maPhim', movieId);
    // params = page ? params.append('page', page) : params

    return this.http.get<MovieDetail>(url, { params });
  }
  layDanhSachPhimTheoNgay(
    tuNgay: string,
    denNgay: string,
    soTrang: number,
    soPhanTuTrenTrang: number
  ): Observable<Movie[]> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP09`;

    let params = new HttpParams();
    params = params.append('tuNgay', tuNgay);
    params = params.append('denNgay', denNgay);
    params = params.append('soTrang', soTrang);
    params = params.append('soPhanTuTrenTrang', soPhanTuTrenTrang);
    return this.http.get<Movie[]>(url, { params });
  }
}
