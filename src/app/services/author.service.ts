import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthorInterface } from '../interfaces/AuthorInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  baseUrl = 'https://localhost:44317/api/Authors';
  batchSize = 1;

  constructor(private http: HttpClient) { }

  getAuthors(){  
    let auth_token= localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    })

    return this.http.get(this.baseUrl, {headers: headers});
  }
  
  createAuthor(author: AuthorInterface){
    
    let auth_token= localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    })
    return this.http.post(this.baseUrl, author, {headers: headers});
  }

  createAuthors(authors: any) {
    
    let auth_token= localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    });
    console.log("creando servicio");
    const rq = JSON.stringify(authors);
    return this.http.post(this.baseUrl+"/createAuthors",rq, {headers: headers});
  }
  
  getAuthor(id: number){
    let auth_token= localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    });
    return this.http.get(this.baseUrl+"/"+id,{headers: headers});
  }

  deleteAuthor(id:number){
    let auth_token= localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    })
    
    return this.http.delete(this.baseUrl+"/"+id, {headers: headers});
  }

  updateAuthor(id:number, author: AuthorInterface){
    let auth_token= localStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}` 
    })
    console.log("actualizar autor"+ author.idBook);
    return this.http.put(this.baseUrl, author,{headers: headers});
  }
}
  