import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedsComponent } from "./pages/feeds/feeds.component";
import { SignupComponent } from "./pages/signup/signup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedsComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chatify';
}
