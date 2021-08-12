import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/common/book';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  authorId:number;
  books:Book[];
  

  constructor(private bs:BookService, private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.authorId=+this.route.snapshot.paramMap.get("aid")
      console.log(this.authorId);
      this.listBooks();
  });
}
  listBooks(){
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');
    this.bs.searchBooks(theKeyword).subscribe(data => {
      this.books = data;
      }
      )

  }

}
