import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';

import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})

export class AppComponent implements OnInit {
  title = 'Simple Angular Book List';
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  onDeleteBook(book: Book): void {
    this.books = this.books.filter(h => h !== book);
  }

}
