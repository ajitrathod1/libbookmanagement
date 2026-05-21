import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  // Use the backend HTTPS endpoint (matches Properties/launchSettings.json) to avoid HTTP->HTTPS redirect
  apiUrl = 'https://localhost:7029/api/Books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {

    console.log("Calling API...");

    return this.http.get<any[]>(this.apiUrl);

  }

  deleteBook(id: number) {

    return this.http.delete(`${this.apiUrl}/${id}`);

  }
}
