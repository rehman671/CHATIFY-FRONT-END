import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseApiService<Post> {
  private endpoint = 'post/';

  constructor(http: HttpClient) {
    console.log('HttpClient injected into PostService');
    super(http);
  }

  getPosts() {
    return this.getAll(this.endpoint);
  }

  getPostById(id: string) {
    return this.getById(this.endpoint, id);
  }

  createPost(post: Post) {
    return this.create(this.endpoint, post);
  }

  updatePost(id: string, post: Post) {
    return this.update(this.endpoint, id, post);
  }

  deletePost(id: string) {
    return this.delete(this.endpoint, id);
  }
}
