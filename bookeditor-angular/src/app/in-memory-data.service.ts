import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {id: 1, name: "Gulliver's Travels", author: "Jonathan Swift" },
      {id: 2, name: "Robinson Crusoe", author: "Daniel Defoe" },
      {id: 3, name: "A Christmas Carol", author: "Charles Dickens" },
      {id: 4, name: "Sherlock Holmes", author: "Arthur Conan Doyle" },
      {id: 5, name: "Treasure Island", author: "Robert Louis Stevenson" },
      {id: 6, name: "Dubliners", author: "James Joyce" },
      {id: 7, name: "Oliver Twist", author: "Charles Dickens" },
      {id: 8, name: "Pride And Prejudice", author: "Jane Austen" }
    ];
    return {books};
  }

  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
  }

  constructor() { }
  
}
