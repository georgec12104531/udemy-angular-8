import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log('postData', postData);
    this.http
      .post(
        'https://http-practice-01.firebaseio.com/post.json',
        postData
      )
    .subscribe(responseData => {
      console.log(responseData);
    })
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  fetchPosts() {
    this.http
      .get('https://http-practice-01.firebaseio.com/post.json')
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
      .subscribe((resp) => {
        console.log(resp);
    });
  }
}
