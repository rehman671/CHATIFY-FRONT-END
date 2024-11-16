import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseApiService<T> {
  constructor(private http: HttpClient) {
    console.log('BaseApiService initialized with HttpClient');
  }
  protected baseApiUrl = 'http://127.0.0.1:8000/api/v1/'; // Define base URL here


  getAll(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseApiUrl}${endpoint}`);
  }

  getById(endpoint: string, id: string): Observable<T> {
    return this.http.get<T>(`${this.baseApiUrl}${endpoint}/${id}`);
  }

  create(endpoint: string, item: T): Observable<T> {
    return this.http.post<T>(`${this.baseApiUrl}${endpoint}`, item);
  }

  update(endpoint: string, id: string, item: T): Observable<T> {
    return this.http.put<T>(`${this.baseApiUrl}${endpoint}/${id}`, item);
  }

  delete(endpoint: string, id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseApiUrl}${endpoint}/${id}`);
  }
}
