import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { MyValidators } from 'src/app/shared/myValidators';
import { Post } from 'src/app/shared/interfaces';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PostsService } from './../../shared/services/posts.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;
  todayDate: Date = new Date();
  message: string;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private alert: AlertService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['createFailed']) {
        this.message =
          'Максимальное количество напоминаний: 10, максимальное количество символов: 50, пожалуйста удалите что-нибудь';
      }
    });

    this.form = new FormGroup({
      title: new FormControl(null, MyValidators.restrictedNote),
      date: new FormControl(
        null
        //  MyValidators.restrictedDate
      ),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const post: Post = {
      note: this.form.value.title,
      date: this.form.value.date,
    };

    this.postsService.setValueNoteLS(post.note);
    this.postsService.create(post).subscribe(() => {
      this.form.reset();
      this.alert.success('Напоминание было создано');
      if (this.message) {
        this.router.navigate(['user', 'create']);
        this.message = '';
      }
      return;
    });
    console.log(new Date(), post.date);
  }
}
