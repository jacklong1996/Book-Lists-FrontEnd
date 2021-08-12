import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../common/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080/books/';

  constructor(private httpClient: HttpClient) { }
  searchBooks(theKeyword:string): Observable<Book[]> {
    const searchUrl= '${this.baseUrl}/search/findByNameContaining?name=${theKeyword}';
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(map(response => response._embedded.books));
   
    }
    }
    interface GetResponseBooks {
    "_embedded": {
    books: Book[];
    }
}
