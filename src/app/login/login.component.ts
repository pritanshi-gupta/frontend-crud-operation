import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onLogin() {

    const loginData = {
      username: this.username,
      password: this.password
    };

    this.authService.login(loginData).subscribe({
      next: (res: any) => {

        // ✔ Save username
        localStorage.setItem('username', this.username);

        // ✔ Save JWT token (IMPORTANT FIX)
        if (res && res.token) {
          localStorage.setItem('token', res.token);
        }

        alert("Login Successful");

        // ✔ Navigate to OTP page
        this.router.navigate(['/otp']);
      },

      error: (err) => {
        alert("Invalid Username or Password");
        console.error(err);
      }
    });

  }
}