import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let books = [
      {id: 1, author: 'John', date: '2013-10-22', title: 'Alice in wonderland'},
      {id: 2, author: 'John', date: '2013-10-22', title: 'Alice in wonderland'},
      {id: 3, author: 'John', date: '2013-10-22', title: 'Alice in wonderland'},
      {id: 4, author: 'John', date: '2013-10-22', title: 'Alice in wonderland'},
      {id: 5, author: 'John', date: '2013-10-22', title: 'Alice in wonderland'},
      {id: 6, author: 'John', date: '2013-10-22', title: 'Alice in wonderland'},
      {id: 7, author: 'John', date: '2013-10-22', title: 'Alice in wonderland'},
      {id: 8, author: 'John', date: '2013-10-22', title: 'Alice in wonderland'},
      {id: 9, author: 'John', date: '2013-10-22', title: 'Alice in wonderland'},
      {id: 10, author: 'John', date: '2013-10-22', title: 'Alice in wonderland'}
    ];
    return {books};
  }

}
