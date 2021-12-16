import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  model: NgbDateStruct | undefined;
  titularAlerta: string='';
  submitted = false;
  constructor(private service: BookService,
    private router: Router) { }


    bookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      pageCount: new FormControl('', Validators.required),
      excerpt: new FormControl('', Validators.required),
      publishDate: new FormControl('', Validators.required)
    });
  
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.bookForm);
    this.service.createBook(this.bookForm.value).subscribe((data: any) => {
      //swal('Registro Exitoso',this.titularAlerta,'succes');
      alert("Libro creado correctamente");
      this.router.navigate(['/books'])
    })
  }
}
