import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookInterface } from '../interfaces/BookInteraface';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = 'https://localhost:44317/api/Books';
  batchSize = 1;

  constructor(private http: HttpClient) { }

  getBooks() {
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(this.baseUrl, { headers: headers });
  }

  getBook(id: number) {
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(this.baseUrl + "/" + id, { headers: headers });
  }

  createBook(book: BookInterface) {
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.post(this.baseUrl, book, { headers: headers });
  }

  createBooks(books: any) {
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    console.log("creando servicio");
    const rq = JSON.stringify(books);
    return this.http.post(this.baseUrl + "/createBooks", rq, { headers: headers });
  }

  updateBook(id: number, book: BookInterface) {
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.post(this.baseUrl, book, { headers: headers });
  }

  deleteBook(id: number) {
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.delete(this.baseUrl + "/" + id, { headers: headers });
  }
  findBook(rqBook: any) {
    let auth_token = localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const rq = JSON.stringify(rqBook);
    return this.http.post(this.baseUrl + "/GetBookAuth", rq, { headers: headers });
  }
}