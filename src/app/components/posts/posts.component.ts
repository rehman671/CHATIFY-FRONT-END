import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  @Input() username: string;
  @Input() postedTime: string;
  @Input() caption: string;
  @Input() type: string;
  @Input() image_url: string;
  @Input() liked: boolean;
  @Input() likeCount: number;
  @Input() commentCount: number;
  @Input() shareCount: number;
  private likeChange: boolean;

  constructor() {
    this.username = '';
    this.postedTime = '';
    this.caption = '';
    this.type = 'text';
    this.image_url = '';
    this.liked = false;
    this.likeChange = false;
    this.likeCount = 0;
    this.commentCount = 0;
    this.shareCount = 0;
  }


  toggleLike() {
    this.liked = !this.liked;
    this.likeChange = !this.likeChange;
    if (!this.liked && this.likeChange) {
      this.likeCount--;
    }
    if (this.liked) {
      if (!this.liked) {
        this.likeCount--;
      }
      else if (this.liked) {
        this.likeCount++;
      }
    }

  }
}
