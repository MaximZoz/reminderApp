import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  noteLS = JSON.parse(localStorage.getItem('note'));

  constructor(
    private postsService: PostsService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe((posts) => {
      this.posts = posts;
      this.timerPostNone();
    });
    setInterval(() => {
      this.pSub = this.postsService.getAll().subscribe((posts) => {
        this.posts = posts;
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
  delete(note: string) {
    this.postsService.removeValueNoteLS(note);
  }

  getId(id: string) {
    this.postsService.idUpdate = id;
  }
  getNote(note: string) {
    this.postsService.noteUpdate = note;
  }
  getData() {
    setInterval(() => {
      this.postsService.getAll();
    }, 10000);
  }
  timerPostNone() {
    setTimeout(() => {
      this.timer = true;
    }, 5000);
  }

  // showReminder(note: string) {
  //   if (localStorage.setItem(note, note) !== null) {
  //     this.alert.danger(note);
  //     localStorage.removeItem(note);
  //   }
  // }

  // showReminder(note: string) {
  //   this.noteLS
  //   if (this.noteLS.indexOf(note) != -1) {
  //     this.alert.danger(note);
  //     this.postsService.removeValueNoteLS(note);
  //   }
  // }
}
