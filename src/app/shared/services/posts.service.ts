import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Post } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class PostsService {
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
        map((response) => {
          return {
            ...post,
            id: response,
            date: new Date(post.date),
          };
        })
      );
  }
}
