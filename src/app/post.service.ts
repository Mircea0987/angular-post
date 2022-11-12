import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './interfaces/cardInterface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  postData(card: any) {
    this.http
      .post(
        'https://angular-post-77c1d-default-rtdb.europe-west1.firebasedatabase.app/cards.json',
        card
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  getData() {
    return this.http.get(
      'https://angular-post-77c1d-default-rtdb.europe-west1.firebasedatabase.app/cards.json'
    );
  }
  //firebase
}
