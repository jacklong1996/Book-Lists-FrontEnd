import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Book } from 'src/app/entities/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {

  want: Book[] = [];
  read: Book[] = [];

  constructor(private bs: BookService) { }

  async ngOnInit(): Promise<void> {
    /*this.want = [
      new Book(1, "Enders Game", "Enders Game", ["Orson Scott Card"], ["Science Fiction", "Fiction"], "Andrew (Ender) Wiggen is taken by the government to be trained as a savior of all mankind",
    300, "Sometime in 1980", "http://books.google.com/books/content?id=Ojqi8KbWuLwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"),
      new Book(2, "Enders Shadow", "Enders Shadow", ["Orson Scott Card"], ["Science Fiction", "Fiction"], "Bean is taken from the streets of Rotterdam to the battleschool",
      310, "1990", 'http://books.google.com/books/content?id=PpEz47zsLEwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api')
    ];

    this.read = this.want;*/

    this.want = await this.bs.getWant();
    this.read = await this.bs.getRead();
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
