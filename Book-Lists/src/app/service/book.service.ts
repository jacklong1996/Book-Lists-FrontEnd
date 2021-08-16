import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../entities/book';
import { TokenStorageService } from './token-storage.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080/books';
  private userUrl = 'http://localhost:8080/users';
  private gbookUrl = 'http://localhost:8080/gbooks';
  private token = this.tokenStore.getToken();
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'responseType': 'text',
      'Authorization': 'Bearer ' + this.token,
    })
  };

  constructor(private httpc: HttpClient, private tokenStore: TokenStorageService) { }

  async getBookList(): Promise<Book[]> {
    const uri = this.baseUrl+'/findallpages';
    //console.log("Adding Authorization: " + this.token);

    return this.httpc.get<Book[]>(uri, this.httpOptions).toPromise();
  }

  addToWant(id: number): Observable<String> {
    const uri = `${this.userUrl}/addtowant?uid=${this.tokenStore.getUser().id}&bid=${id}`;
    //console.log(this.httpc.get<String>(uri, this.httpOptions).toPromise());
    return this.httpc.get<String>(uri, this.httpOptions);//.pipe(map(data => data.text));
  }

  addToRead(id: number): Observable<String> {
    const uri = `${this.userUrl}/addtoread?uid=${this.tokenStore.getUser().id}&bid=${id}`;
    return this.httpc.get<String>(uri, this.httpOptions);
  }

  async getWant(): Promise<Book[]> {
    const uri = `${this.userUrl}/findwant?uid=${this.tokenStore.getUser().id}`;
    return this.httpc.get<Book[]>(uri, this.httpOptions).toPromise();
  }

  async getRead(): Promise<Book[]> {
    const uri = `${this.userUrl}/findread?uid=${this.tokenStore.getUser().id}`;
    return this.httpc.get<Book[]>(uri, this.httpOptions).toPromise();
  }

  async searchGBooks(search: string): Promise<Book[]> {
    const uri = `${this.gbookUrl}/searchbytitle?search=${search}`;
    return this.httpc.get<Book[]>(uri, this.httpOptions).toPromise();
  }
}

interface MessageResponse {
  text: string;
}