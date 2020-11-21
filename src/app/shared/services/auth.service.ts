import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class AuthService {
  url = `https://europe-west1-st-web-test.cloudfunctions.net/api`;

  constructor(private http: HttpClient) {}
  login(user: User): Observable<any> {
    return this.http.post(`${this.url}/auth`, user).pipe(
      tap((response) => {
        localStorage.setItem('token', 'Bearer ' + response.token);
        localStorage.setItem('note', JSON.stringify([]));
      })
    );
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  logout() {
    return localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
