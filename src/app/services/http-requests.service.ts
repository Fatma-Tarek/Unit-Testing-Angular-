import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

interface Post{
  userId: number;
  id: number;
  title: string;
  body: string
}
@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private http: HttpClient) {}
    getPost(postId: number): Observable<Post>{
      return this.http.get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${postId}`)
        .pipe(map((data)=>{
         // console.log('here id data',data)
          return {...data
             //,hello: 'world'
            }
        })
      );
    }
}
