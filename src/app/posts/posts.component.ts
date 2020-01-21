import { Component, OnInit , Input} from '@angular/core';
import {Post} from '../posts.model';
import {PostService} from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  @Input() posts: Post[] = [];

  constructor(public postService: PostService) { }
  ngOnInit() {
    this.posts = this.postService.getPosts();
  }


}
