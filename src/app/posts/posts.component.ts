import { Component, OnInit , OnDestroy} from '@angular/core';
import {Post} from '../posts.model';
import {PostService} from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit,OnDestroy {

  posts: Post[] = [];
  private postSub: Subscription;

  constructor(public postService: PostService) { }
  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSub = this.postService.getUpdatedPosts()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    })
  }

  ngOnDestroy(){
this.postSub.unsubscribe();
  }
}
