import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

  otp: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // ✔ VERIFY OTP
  verifyOtp() {

    const data = {
      username: localStorage.getItem('username'),
      otp: this.otp
    };

    this.authService.verifyOtp(data).subscribe({
      next: (res: any) => {

        console.log("OTP Response:", res);

        // ✔ save JWT token
        localStorage.setItem('token', res.token);

        alert("OTP Verified Successfully");

        // ✔ go to home page
        this.router.navigate(['/home']);
      },

      error: (err) => {
        alert("Invalid OTP");
        console.error(err);
      }
    });

  }

  // 🔥 NEW: RESEND OTP FUNCTION
  resendOtp() {

    const data = {
      username: localStorage.getItem('username')
    };

    this.authService.sendOtp(data).subscribe({
      next: () => {
        alert("OTP Resent Successfully");
      },
      error: () => {
        alert("Failed to resend OTP");
      }
    });

  }

}