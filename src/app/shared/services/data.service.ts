import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCarsSmall() {
    return this.http
      .get('https://api.publicapis.org/categories')
      .toPromise()
      .then((res) => <any[]>res)
      .then((data) => {
        return data;
      });
  }
}
