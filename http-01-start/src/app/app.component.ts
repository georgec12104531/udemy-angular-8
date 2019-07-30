import { PostsService } from './posts.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request

    this.postsService.createAndStorePosts(postData.title, postData.content);
   
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  fetchPosts() {
    this.isFetching = true;
    this.http
      .get<{[key: string]: Post}>('https://http-practice-01.firebaseio.com/post.json')
      .pipe(map((response) => {
        const postArr = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            postArr.push({...response[key], id: key})
          }
        }
        return postArr;
      })
    )
      .subscribe((posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
    });
  }
}
