import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedsComponent } from "./pages/feeds/feeds.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chatify';

  constructor(private router: Router) {}

  isLoginPage(): boolean {
    const currentRoute = this.router.url;
    return currentRoute.includes('login') || currentRoute.includes('signup');
  }
}
