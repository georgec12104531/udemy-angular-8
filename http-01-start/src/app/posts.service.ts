import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {

  }

  createAndStorePosts(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
    .post<{ name: string }>(
      'https://http-practice-01.firebaseio.com/post.json',
      postData
    )
  .subscribe(responseData => {
    console.log(responseData);
  });
  }
}