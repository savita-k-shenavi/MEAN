import { Post } from "./posts.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostService {
  private posts: Post[] = [];
  private updatedPosts = new Subject<Post[]>();
  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: Post[] }>("http://localhost:3000/app/post")
      .subscribe(postData => {
        this.posts = postData.posts;
        this.updatedPosts.next([...this.posts]);
      });
  }

  getUpdatedPosts() {
    return this.updatedPosts.asObservable();
  }

  postPosts(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.http
      .post<{ message: string }>("http://localhost:3000/app/post", post)
      .subscribe(response => {
        console.log(response.message);
        this.posts.push(post);
        this.updatedPosts.next([...this.posts]);
      });
  }
}
