import { SignupComponent } from '../../main/signup/signup.component';
import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(
    component: SignupComponent,
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
    const isDirty =
      component.signupForm.dirty && !component.signupForm.submitted;

    if (isDirty) {
      return confirm('Thông tin đã điền sẽ bị mất, Bạn có chắc muốn rời khỏi!');
    }

    return true;
  }
}
