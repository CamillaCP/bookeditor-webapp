import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Book } from './book';
import { BOOKS } from './mock-books';

import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'api/books'; 
  httpOptions = {
    headers: new HttpHeaders({ 'ContentType': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        tap(_ => this.log('Fetched Books')),
        catchError(this.handleError<Book[]>('getBooks', []))
      );
  }

  getBookNo404<Data>(id: number): Observable<Book> {
    const url = `${this.booksUrl}/?id=${id}`;
    return this.http.get<Book[]>(url)
      .pipe(
        map(books => books[0]), 
        tap(b => {
          const outcome = b ? 'fetched' : 'did not find';
          this.log(`${outcome} hero ID=${id}`);
        }),
        catchError(this.handleError<Book>(`getBook id=${id}`))
      );
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      tap(_=> this.log(`Fetched book with ID=${id}`)),
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  updateBook(book: Book): Observable<any> {
    return this.http.put(this.booksUrl, book, this.httpOptions).pipe(
      tap(_ => this.log(`Updated Book id=${book.id}`)),
      catchError(this.handleError<any>('updateBook'))
    );
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, this.httpOptions).pipe(
      tap((newBook: Book) => this.log(`Added Book with ID=${newBook.id}`)),
      catchError(this.handleError<Book>('addBook'))
    );
  }

  deleteBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
  
    return this.http.delete<Book>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Deleted Book with ID=${id}`)),
      catchError(this.handleError<Book>('deleteBook'))
    );
  }

  searchBooks(term: string): Observable<Book[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Book[]>(`${this.booksUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`Found books matching "${term}"`) :
        this.log(`No books matching "${term}"`)),
      catchError(this.handleError<Book[]>('searchBooks', [])) 
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed - ${error.message}`);
      return of(result as T);
    };
  }
  
  private log(message: string) {
    this.messageService.add(`BookService - ${message}`);
  }
}
