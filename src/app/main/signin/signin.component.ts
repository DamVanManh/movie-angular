import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  hide = true;
  signinError: string = '';
  signinForm: FormGroup = new FormGroup({
    taiKhoan: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    matKhau: new FormControl('', [Validators.required]),
  });
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {}

  handleSignin() {
    if (this.signinForm.invalid) return;
    this.auth.signin(this.signinForm.value).subscribe({
      next: (result) => {
        localStorage.setItem('user', JSON.stringify(result));
        this.auth.currentUser.next(result);
        const redirectUrl = (window as any).PATH;
        if (redirectUrl) {
          (window as any).PATH = undefined;
          this.router.navigateByUrl(redirectUrl);
        } else {
          this.router.navigateByUrl('/');
        }
      },
      error: (error) => {
        this.signinError = error.error;
        console.log(error);
      },
    });
  }
}
