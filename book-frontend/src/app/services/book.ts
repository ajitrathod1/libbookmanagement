import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  apiUrl = 'http://localhost:5095/api/Books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {

    console.log("Calling API...");

    return this.http.get<any[]>(this.apiUrl);

  }

  deleteBook(id: number) {

    return this.http.delete(`${this.apiUrl}/${id}`);

  }
}
