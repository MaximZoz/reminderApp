import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from './../../shared/services/posts.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;
  todayDate: Date = new Date();

  constructor(private postsService: PostsService) {
    console.log(this.todayDate);
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value.date);
    // return;

    const post: Post = {
      note: this.form.value.title,
      date: this.form.value.date,
    };
    this.postsService.create(post).subscribe(() => {
      this.form.reset();
      // this.alert.success('Пост был создан');
    });
  }
}
