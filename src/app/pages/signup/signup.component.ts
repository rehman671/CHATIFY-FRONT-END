import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm = {
    fullName: '',
    email: '',
    password: ''
  };
  
  loginForm = {
    email: '',
    password: ''
  };
  
  public containerClass = "container"

  constructor(private router: Router) {}

  // Sign Up logic
  public onSignup() {
    // Normally you'd send the form data to your API and process the signup.
    // event.preventDefault()
    console.log('Sign Up Form:', this.signupForm);

    // After successful sign-up, redirect to feed page
    this.router.navigate(['/feed']);
  }

  // Login logic
  public onLogin() {
    // Normally you'd send the login data to your API and process authentication.
    // event.preventDefault()
    console.log('Login Form:', this.loginForm);

    // After successful login, redirect to feed page
    this.router.navigate(['/feed']);
  }

  public addActive() {
    this.containerClass = "container active"
  }

  public removeActive() {
    this.containerClass = "container"
  }

}
