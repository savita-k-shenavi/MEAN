import { Component, OnInit , Input} from '@angular/core';
import {Post} from '../posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';

 @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit() {
  }


}
