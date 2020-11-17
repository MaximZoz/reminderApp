import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Reminder } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/services/posts.service';
import { EditPageComponent } from '../edit-page/edit-page.component';

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
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe((posts) => {
      this.posts = posts;

      console.log('ReminderPageComponent -> constructor -> posts', this.posts);
    });
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
    });
  }
  getId(id: string) {
    this.postsService.idUpdate = id;
  }
  getNote(none: string) {
    this.postsService.noteUpdate = none;
  }
}
