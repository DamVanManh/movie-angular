import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SigninResult } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  currentUser: SigninResult | null = null;
  currentUserSubscription?: Subscription;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.currentUserSubscription = this.auth.currentUser
      .asObservable()
      .subscribe({
        next: (result) => {
          this.currentUser = result;
        },
      });
  }
  ngOnDestroy(): void {
    this.currentUserSubscription?.unsubscribe
  }
}
