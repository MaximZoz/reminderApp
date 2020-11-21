import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

import { Post, Reminder } from 'src/app/shared/interfaces';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  posts: Reminder[] = [];
  form: FormGroup;
  post: Post;
  submitted = false;
  uSub: Subscription;
  todayDate: Date = new Date();

  constructor(
    private postsService: PostsService,
    private alert: AlertService,
    private router: Router
  ) {}
  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(
        this.postsService.noteUpdate.toString(),
        Validators.required
      ),
      date: new FormControl(null, Validators.required),
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const post: Post = {
      note: this.form.value.title,
      date: this.form.value.date,
    };
    (this.uSub = this.postsService
      .update({
        ...this.post,
        note: this.form.value.title,
        date: this.form.value.date,
      })
      .subscribe(() => {
        this.submitted = false;
        this.alert.success('Напоминание изменено');
        this.postsService.editValueNoteLS(
          this.postsService.noteUpdate,
          post.note
        );
      })),
      this.router.navigate(['user', 'reminder']);
  }
}
