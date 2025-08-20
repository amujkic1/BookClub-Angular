import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url = 'http://localhost:3000/user'
  private http = inject(HttpClient)

  signup(userData: { username:string, email:string, password:string }): Observable<any> {
    return this.http.post(`${this.url}/signup`, userData)
  }

  login(userData: { email:string, password:string }): Observable<any> {
    return this.http.post(`${this.url}/login`, userData, {
      withCredentials: true
    })
  }
  
}
