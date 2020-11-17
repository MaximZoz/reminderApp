import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Post, Reminder } from 'src/app/shared/interfaces';
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
  constructor(private postsService: PostsService) {}
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
    this.uSub = this.postsService
      .update({
        ...this.post,
        note: this.form.value.title,
        date: this.form.value.date,
      })
      .subscribe(() => {
        this.submitted = false;
      });
  }
}
