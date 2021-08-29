import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Khi return về true => Cho phép truy cập vào route

    // Kiểm tra xem đã đăng nhập hay chưa, và maLoaiNguoiDung có phải là QuanTri hay không
    const currentUser = this.auth.currentUser.value;

    if (currentUser) {
      if (currentUser.maLoaiNguoiDung === 'QuanTri') {
        // Hợp lệ => cho phép truy cập
        return true;
      }
      // Đã đăng nhập nhưng maLoaiNguoiDung khác QuanTri
      this.router.navigateByUrl('/');
      return false;
    }

    // Chưa đăng nhập
    this.router.navigateByUrl('/dangky');
    return false;
  }
}
