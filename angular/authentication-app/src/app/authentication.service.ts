import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'your_backend_api_url'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  signup(user: any): Observable<any> {
    const url = `${this.baseUrl}/signup`; // Replace with your signup API endpoint
    return this.http.post(url, user);
  }

  signin(user: any): Observable<any> {
    const url = `${this.baseUrl}/signin`; // Replace with your signin API endpoint
    return this.http.post(url, user);
  }
}
