import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { Post } from '../posts.model';
import { NgForm } from '@angular/forms';
import {PostService} from '../posts.service';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss']
})
export class CreatePostsComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();
  constructor(public postService: PostService) {
   }

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log('inside test');
    // const post: Post = {
    //   title : form.value.title,
    //   content : form.value.content
    // };
    this.postService.postPosts(form.value.title, form.value.content)
   // this.postCreated.emit(post);
  }
}
