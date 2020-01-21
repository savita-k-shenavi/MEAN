import {Post} from './posts.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  private posts: Post[] = [];
  private updatedPosts = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getUpdatedPosts(){
    return this.updatedPosts.asObservable();
  }

  postPosts(title: string, content: string){
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.updatedPosts.next([...this.posts]);
  }
}
