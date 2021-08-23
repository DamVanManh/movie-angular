import { Injectable } from '@angular/core';
import { Movie, MovieDetail } from '../models/movie.model';

import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  // Từ angular 5 trở lên
  // Không cần import service vào trong mảng providers ở AppModule đã khai báo providedIn: 'root'
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovieList(): Observable<Movie[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';

    return this.http.get<Movie[]>(url);
  }

  getMovieDetail(movieId: string): Observable<MovieDetail> {
    // const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?maPhim=${movieId}`;

    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim`;

    let params = new HttpParams();
    params = params.append('maPhim', movieId);
    // params = page ? params.append('page', page) : params

    return this.http.get<MovieDetail>(url, { params });
  }

  // Promise
  // axios.get(url).then(res => console.log(res))
  // getMovieListPromise(): Promise<Movie[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // reject("Lỗi rồi")

  //       resolve([
  //         { id: 1, name: 'Avenger', price: 80000 },
  //         { id: 2, name: 'Wonder woman', price: 80000 },
  //         { id: 3, name: 'Iron man', price: 80000 },
  //       ]);
  //     }, 3000);
  //   });
  // }

  // Observable
  // getMovieListObservable(): Observable<Movie[]> {
  //   return new Observable((subscribe) => {
  //     setTimeout(() => {
  //       subscribe.next([
  //         { id: 1, name: 'Avenger', price: 80000 },
  //         { id: 2, name: 'Wonder woman', price: 80000 },
  //         { id: 3, name: 'Iron man', price: 80000 },
  //       ]);

  //       // subscribe.error('Lỗi rồi')

  //       subscribe.complete();
  //     }, 3000);
  //   });
  // }
}
