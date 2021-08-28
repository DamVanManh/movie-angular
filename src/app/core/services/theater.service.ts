import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theater, TheaterShowtime } from '../models/theater.models';

@Injectable({
  providedIn: 'root',
})
export class TheaterService {
  constructor(private http: HttpClient) {}
  LayThongTinHeThongRap(maHeThongRap?: string): Observable<Theater[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap';
    let params = new HttpParams();
    params = maHeThongRap
      ? params.append('maHeThongRap', maHeThongRap)
      : params;
    return this.http.get<Theater[]>(url, { params });
  }
  LayThongTinLichChieuHeThongRap(
    maHeThongRap: string | number | boolean
  ): Observable<TheaterShowtime[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap';
    let params = new HttpParams();
    params = params.append('maHeThongRap', maHeThongRap);
    params = params.append('maNhom', 'GP09');

    return this.http.get<TheaterShowtime[]>(url, { params });
  }
}
