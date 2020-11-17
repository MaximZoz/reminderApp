import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Post, Reminder } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class PostsService {
  idUpdate: string;
  noteUpdate: string;

  constructor(private http: HttpClient, private auth: AuthService) {}

  create(post: Post): Observable<Post> {
    console.log(post);
    return this.http
      .post(`${this.auth.url}/reminders`, post, {
        headers: new HttpHeaders({
          Authorization: this.auth.token,
        }),
      })
      .pipe(
        map(() => {
          return {
            ...post,
          };
        })
      );
  }

  getAll(): Observable<Reminder[]> {
    return this.http
      .get(`${this.auth.url}/reminders`, {
        headers: new HttpHeaders({
          Authorization: this.auth.token,
        }),
      })
      .pipe(
        map((response: [{ key: string }]) => {
          return Object.keys(response).map((key) => ({
            ...response[key],
          }));
        })
      );
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.auth.url}/reminders/${id}`, {
      headers: new HttpHeaders({
        Authorization: this.auth.token,
      }),
    });
  }

  update(post: Reminder) {
    return this.http.put(`${this.auth.url}/reminders/${this.idUpdate}`, post, {
      headers: new HttpHeaders({
        Authorization: this.auth.token,
      }),
    });
  }
}
