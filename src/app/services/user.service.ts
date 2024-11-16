import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService<User> {
  private endpoint = '/users';

  constructor(http: HttpClient) {
    super(http);
  }

  getUsers() {
    return this.getAll(this.endpoint);
  }

  getUserById(id: string) {
    return this.getById(this.endpoint, id);
  }

  createUser(user: User) {
    return this.create(this.endpoint, user);
  }

  updateUser(id: string, user: User) {
    return this.update(this.endpoint, id, user);
  }

  deleteUser(id: string) {
    return this.delete(this.endpoint, id);
  }
}
