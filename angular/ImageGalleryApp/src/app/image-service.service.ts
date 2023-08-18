import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  private apiUrl = 'https://api.unsplash.com/photos/random';

  constructor(private http: HttpClient) {}

  getRandomImage(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Client-ID ${this.apiKey}`);
    return this.http.get(this.apiUrl, { headers });
  }
}
