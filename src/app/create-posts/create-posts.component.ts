import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { Post } from '../posts.model';
@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss']
})
export class CreatePostsComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();
  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    console.log('inside test');
    const post: Post = {title : this.enteredTitle , content : this.enteredContent};
    this.postCreated.emit(post);
  }
}
