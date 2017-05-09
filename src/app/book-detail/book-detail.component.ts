import { Output, EventEmitter, Component, Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

import { Book } from '../book';
import { BookService } from '../book.service'

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [BookService]
})
export class BookDetailComponent {

  edit = false;
  @Input() book: Book;
  @Output() deleteBook: EventEmitter<any> = new EventEmitter<any>();

  constructor(private bookService: BookService) { }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  save(): void {
    this.bookService.update(this.book)
      .then(() => this.toggleEdit());
  }

  delete(book: Book): void {
    this.bookService
      .delete(book.id)
      .then(() => {
        this.deleteBook.emit(book);
      });
  }

}
