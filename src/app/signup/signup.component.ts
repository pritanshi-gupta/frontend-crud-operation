import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSignup() {
    if (!this.username || !this.password) {
      alert('Please fill in all fields');
      return;
    }

    const signupData = {
      username: this.username,
      password: this.password
    };

    this.authService.register(signupData).subscribe({
      next: (res: any) => {
        // ✔ Save username
        localStorage.setItem('username', this.username);

        // ✔ Save JWT token if provided
        if (res && res.token) {
          localStorage.setItem('token', res.token);
        }

        alert('Signup Successful');

        // ✔ Navigate to login page
        this.router.navigate(['/login']);
      },

      error: (err) => {
        alert('Registration failed. Please try again.');
        console.error(err);
      }
    });
  }
}
