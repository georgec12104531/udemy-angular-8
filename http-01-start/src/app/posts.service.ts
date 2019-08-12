import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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

  fetchPosts() {
    return this.http
      .get<{[key: string]: Post}>(
        'https://http-practice-01.firebaseio.com/post.json')
      .pipe(
        map((response) => {
        const postArr = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            postArr.push({...response[key], id: key});
          }
        }
        return postArr;
      })
    );
  }

  deletePosts() {
    return this.http.delete('https://http-practice-01.firebaseio.com/post.json');
  }
}
