import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SigninComponent } from 'src/app/main/signin/signin.component';

@Injectable({
  providedIn: 'root',
})
export class SigninGuard implements CanDeactivate<SigninComponent> {
  canDeactivate(
    component: SigninComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return true => cho phép rời khỏi route

    // Kiểm tra xem form đã bị thay đổi hay chưa
    const isDirty = component.signinForm.dirty && component.signinForm.invalid;

    if (isDirty) {
      return confirm('Thông tin đã điền sẽ bị mất, Bạn có chắc muốn rời khỏi!');
    }

    return true;
  }
}
