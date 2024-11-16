import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { PostsComponent } from '../../components/posts/posts.component';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';  // Import HttpClientModule




@Component({
  selector: 'app-feeds',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatBadgeModule, MatSidenavModule, PostsComponent, SideNavComponent, CommonModule, HttpClientModule],
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.scss'
})
export class FeedsComponent {
  hidden = false;
  posts: Post[] = [];
  chatbox = [
    {
      "message": "This is test",
      "username": "saim_123",
      "seen": true
    },
    {
      "message": "hello",
      "username": "asad_kheero",
      "seen": false

    },
    {
      "message": "past",
      "username": "test",
      "seen": true

    }
  ]
  constructor(private postService: PostService, http:HttpClient) { 
    console.log("Successfully Injected PostService")
  }  // Inject PostService

  ngOnInit() {
    console.log('FeedsComponent initialized');
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        console.log(data)
        this.posts = data;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      }
    });
  }
}