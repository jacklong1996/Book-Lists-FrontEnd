import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Book } from 'src/app/entities/book';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  want: Book[] = [];
  read: Book[] = [];

  constructor() { }

  ngOnInit(): void {
    this.want = [
      new Book(1, "Enders Game", "Enders Game", ["Orson Scott Card"], ["Science Fiction", "Fiction"], "Andrew (Ender) Wiggen is taken by the government to be trained as a savior of all mankind",
    300, "Sometime in 1980", "http://books.google.com/books/content?id=Ojqi8KbWuLwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"),
      new Book(2, "Enders Shadow", "Enders Shadow", ["Orson Scott Card"], ["Science Fiction", "Fiction"], "Bean is taken from the streets of Rotterdam to the battleschool",
      310, "1990", 'http://books.google.com/books/content?id=PpEz47zsLEwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')
    ];

    this.read = this.want;
  }

  /*buildBooks() {
    book: Book = new Book(1, "Enders Game", "Enders Game", {"Orson Scott Card"}, {"Science Fiction", "Fiction"}, "Andrew (Ender) Wiggen is taken by the government to be trained as a savior of all mankind",
    300, "Sometime in 1980", "http://books.google.com/books/content?id=Ojqi8KbWuLwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api");
    book.id = 1;
  }*/
  

  dropWant(event: CdkDragDrop<Book[]>) {
    moveItemInArray(this.want, event.previousIndex, event.currentIndex);
    console.log(this.want);
  }

  dropRead(event: CdkDragDrop<Book[]>) {
    moveItemInArray(this.read, event.previousIndex, event.currentIndex);
    console.log(this.read);
  }
}
