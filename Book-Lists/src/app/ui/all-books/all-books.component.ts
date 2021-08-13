import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/entities/book';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  want: Book[] = [];

  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 1;
  
  constructor() { }

  ngOnInit(): void {
    this.want = [
      new Book(1, "Enders Game", "Enders Game", ["Orson Scott Card"], ["Science Fiction", "Fiction"], "Andrew (Ender) Wiggen is taken by the government to be trained as a savior of all mankind",
    300, "Sometime in 1980", "http://books.google.com/books/content?id=Ojqi8KbWuLwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"),
      new Book(2, "Enders Shadow", "Enders Shadow", ["Orson Scott Card"], ["Science Fiction", "Fiction"], "Bean is taken from the streets of Rotterdam to the battleschool",
      310, "1990", 'http://books.google.com/books/content?id=PpEz47zsLEwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')
    ];
  }

  handleListBooks() {

  }

}
