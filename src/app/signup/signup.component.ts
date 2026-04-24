import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

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

  constructor(private router: Router) {}

  onSignup() {
    console.log("Signup:", this.username);

    this.router.navigate(['/otp']);
  }
}
