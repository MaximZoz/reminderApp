import { Pipe, PipeTransform } from '@angular/core';
import { Reminder } from './../../shared/interfaces';

@Pipe({
  name: 'searchPosts',
})
export class SearchPipe implements PipeTransform {
  transform(posts: Reminder[], search: string = ''): Reminder[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter((post) => {
      return post.note.toLowerCase().includes(search.toLowerCase());
    });
  }
}
