import { Component, OnInit} from '@angular/core';
import { Post } from '../posts.model';
import { NgForm } from '@angular/forms';
import {PostService} from '../posts.service';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss']
})
export class CreatePostsComponent implements OnInit {
  constructor(public postService: PostService) {
   }

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log('inside test');

    this.postService.postPosts(form.value.title, form.value.content)
    form.resetForm();
  }
}
