import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AuthorService } from '../../../services/author.service';
import { BookService } from '../../../services/book.service';
import { AuthorInterface } from '../../../interfaces/AuthorInterface';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.scss']
})
export class UpdateAuthorComponent implements OnInit {

  lstBooks: Array<any> = [];
  valSelect:any=null;
  
    
  constructor(
    private router: Router,
    private service: AuthorService,
    private dialog: NgbModal,
    private config: NgSelectConfig,
    private bookService: BookService) {
      
     }
data:any={};
  ngOnInit(): void {
    this.loadBooks();
    
    
      
  }

  onSubmit() {
    this.service.updateAuthor(this.data.id, this.data).subscribe((data: any) => {
      alert("Libro actualizado correctamente");
      this.router.navigate(['/authors']);
      
    });
  }
  
  loadBooks() {
    this.bookService.getBooks().subscribe((response: any) => {

      this.lstBooks = response.result;
      
      let datos = localStorage.getItem('datos');
      if (datos) {
        this.data= JSON.parse(datos);
        this.valSelect=this.data.idBook;
        delete this.data.book;
    }
    })
  }
  
  updateAuthor(author: AuthorInterface) {
    console.log(author);
    let datos = JSON.stringify(author);
    localStorage.setItem('datos', datos);
    Swal.fire("hola");
    this.loadBooks();
    this.dialog.open(UpdateAuthorComponent);
  }

  closeModal(){
    this.dialog.dismissAll();
  }
}
