import { Component, Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {

  edit = false;
  @Input() book: Book;

  toggleEdit(): void {
    this.edit = !this.edit;
  }

}
