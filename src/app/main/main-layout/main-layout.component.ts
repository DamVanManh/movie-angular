import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SigninResult } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('header') header!: ElementRef;
  @ViewChild('headerFixed') headerFixed!: ElementRef;
  currentUser: SigninResult | null = null;
  currentUserSubscription?: Subscription;
  constructor(private auth: AuthService, private router: Router) {}
  href: string = '';
  ngOnInit(): void {
    this.currentUserSubscription = this.auth.currentUser
      .asObservable()
      .subscribe({
        next: (result) => {
          this.currentUser = result;
        },
      });
    this.href = this.router.url;
  }
  ngAfterViewInit() {
    window.addEventListener('scroll', this.scroll.bind(this));
  }

  ngOnDestroy(): void {
    this.currentUserSubscription?.unsubscribe;
    window.removeEventListener('scroll', this.scroll);
  }
  logOut() {
    localStorage.removeItem('user');
    this.auth.currentUser.next(null);
  }
  scroll() {
    this.headerFixed.nativeElement.classList.toggle(
      'scroll-down',
      this.header.nativeElement.getBoundingClientRect().bottom < 0
    );
  }
  handleSignup() {
    if (this.router.url !== '/dangnhap' && this.router.url !== '/dangky') {
      (window as any).PATH = this.router.url; // lưu lại url hiện tại vào biến window
    }
    this.router.navigateByUrl('/dangky');
  }
  handleSignin() {
    if (this.router.url !== '/dangnhap' && this.router.url !== '/dangky') {
      (window as any).PATH = this.router.url; // lưu lại url hiện tại vào biến window
    }
    this.router.navigateByUrl('/dangnhap');
  }
}
