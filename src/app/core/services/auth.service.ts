import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {
  SigninParams,
  SigninResult,
  SignupParams,
  SignupResult,
} from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject<SigninResult | null>(null);
  constructor(private http: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUser.next(JSON.parse(user));
    }
  }

  signin(values: SigninParams): Observable<SigninResult> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';

    return this.http.post<SigninResult>(url, values);
  }

  signup(values: SignupParams): Observable<SignupResult> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';
    return this.http.post<SignupResult>(url, {
      ...values,
      maNhom: 'GP09',
      maLoaiNguoiDung: 'KhachHang',
    });
  }
}
