import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm!: NgForm;
  hide1 = true;
  hide2 = true;
  signupError: string = '';
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {}
  handleSignUp() {
    if (this.signupForm.invalid) return;
    const signupForm = this.signupForm.value;
    delete signupForm.nhapLaiMatKhau;

    this.auth.signup(this.signupForm.value).subscribe({
      next: (result) => {
        this.router.navigateByUrl('/dangnhap');
        this.signupForm.reset();
      },
      error: (error) => {
        this.signupError = error.error;
        console.log(error);
      },
    });
  }
}
