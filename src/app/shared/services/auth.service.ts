import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../interfaces';

@Injectable()
export class AuthService {
  private url = `https://europe-west1-st-web-test.cloudfunctions.net/api/auth`;

  private token: string;

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(this.url, user).pipe(
      tap((response) => {
        this.token = response.token;
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

  logout() {}

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
