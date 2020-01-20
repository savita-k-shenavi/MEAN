import { Component  } from '@angular/core';
import {Post} from '../app/posts.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyApp';
 storedPosts: Post[] = [];

onPostAdded(post){
this.storedPosts.push(post);
}

}
