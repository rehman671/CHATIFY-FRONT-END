import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedsComponent } from "./pages/feeds/feeds.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chatify';
}
