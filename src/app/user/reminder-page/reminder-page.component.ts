import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Reminder } from 'src/app/shared/interfaces';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-reminder-page',
  templateUrl: './reminder-page.component.html',
  styleUrls: ['./reminder-page.component.scss'],
})
export class ReminderPageComponent implements OnInit, OnDestroy {
  posts: Reminder[] = [];
  pSub: Subscription;
  dSub: Subscription;
  searchStr: string = '';
  timer = false;

  constructor(
    private postsService: PostsService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe((posts) => {
      this.posts = posts;
      this.timerPostNone(this.timer);
    });
    setInterval(() => {
      this.pSub = this.postsService.getAll().subscribe((posts) => {
        this.posts = posts;
        console.log(
          'ReminderPageComponent -> constructor -> posts',
          this.posts
        );
      });
    }, 30000);
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }

  remove(id: string) {
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
      this.alert.warning('напоминание удалено');
    });
  }
  getId(id: string) {
    this.postsService.idUpdate = id;
  }
  getNote(none: string) {
    this.postsService.noteUpdate = none;
  }
  getData() {
    setInterval(() => {
      this.postsService.getAll();
    }, 10000);
  }
  timerPostNone(timer: boolean) {
    setTimeout(() => {
      this.timer = true;
    }, 5000);
  }
}
