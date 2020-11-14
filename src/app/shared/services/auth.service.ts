import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../interfaces';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = `https://europe-west1-st-web-test.cloudfunctions.net/api/auth`;
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(this.url, user).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token.toString());
      })
    );
  }

  // login(user: User): Observable<any> {
  //   return this.http.post(this.url, user, {
  //     headers: new HttpHeaders({
  //       Authorization: 'token',
  //     }),
  //   });
  // }

  get token(): string {
    return localStorage.getItem('token');
  }

  logout() {}

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
