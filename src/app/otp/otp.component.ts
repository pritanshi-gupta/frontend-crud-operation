import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

  otp: string = '';
  constructor(private router: Router) {}

  verifyOtp() {
    console.log("OTP:", this.otp);

    this.router.navigate(['/home']);
  }
}
