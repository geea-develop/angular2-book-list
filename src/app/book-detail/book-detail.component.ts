import { Output, EventEmitter, Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Book } from '../book';
import { BookService } from '../book.service';

import { ModalComponent } from '../modal/modal.component';

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

  editBookForm : FormGroup;

  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;

  constructor(private bookService: BookService, fb: FormBuilder) {
    this.editBookForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'title' : ['title', Validators.compose([Validators.required, Validators.minLength(1)])],
      'author': ['author', Validators.compose([Validators.required, Validators.minLength(1)])],
      'date' : ['date', Validators.required]
    })

  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  save(): void {
    this.bookService.update(this.book)
      .then(() => this.toggleEdit());
  }

  remove(book: Book): void {
    this.bookService
      .delete(book.id)
      .then(() => {
        this.deleteBook.emit(book);
      });
  }

}
