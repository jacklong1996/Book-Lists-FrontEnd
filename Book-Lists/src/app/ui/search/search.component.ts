import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/entities/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: Book[] = [];
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 1;
  constructor(private route: ActivatedRoute, private bs: BookService) { }

  async ngOnInit(): Promise<void> {
    const keyword = this.route.snapshot.paramMap.get('keyword');
    this.search = await this.bs.searchGBooks(keyword);
  }

  addToWant(id: number) {

  }

  addToRead(id: number) {

  }
}
