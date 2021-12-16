import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AuthorService } from '../../../services/author.service';
import { BookService } from '../../../services/book.service';
import { AuthorInterface } from '../../../interfaces/AuthorInterface';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.scss']
})
export class UpdateAuthorComponent implements OnInit {

  lstBooks: Array<any> = [];
  valSelect: Number | undefined;
  authorForm = new FormGroup({
    id: new FormControl('', Validators.required),
    idBook: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    
  });
    
  constructor(private fb: FormBuilder,
    private router: Router,
    private service: AuthorService,
    private dialog: NgbModal,
    private bookService: BookService) { }

  ngOnInit(): void {

    let datos = localStorage.getItem('datos');
    
    if (datos) {
      let data = JSON.parse(datos);
      this.loadBooks();
      this.valSelect=data.idBook;
      this.authorForm.controls['id'].setValue(data.id);
      this.authorForm.controls['idBook'].setValue(data.idBook);
      this.authorForm.controls['firstName'].setValue(data.firstName);
      this.authorForm.controls['lastName'].setValue(data.lastName);
    }
  }

  onSubmit() {
    console.log(this.authorForm);
    console.log("id autor: "+this.authorForm.value['id']);
    console.log("id book: "+this.authorForm.value['idBook']);
    this.service.updateAuthor(this.authorForm.value['id'], this.authorForm.value).subscribe((data: any) => {
      alert("Libro actualizado correctamente");
      this.router.navigate(['/authors']);
      
    });
  }
  
  loadBooks() {
    this.bookService.getBooks().subscribe((response: any) => {
      this.lstBooks = response.result;
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
