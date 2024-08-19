import { Component  , ChangeDetectionStrategy} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { PostsComponent } from '../../components/posts/posts.component';
import { CardsComponent } from "../../components/cards/cards.component";


@Component({
  selector: 'app-feeds',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatBadgeModule, PostsComponent, CardsComponent],
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.scss'
})
export class FeedsComponent {
  hidden = false

}
