import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from '../../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  model: NgbDateStruct | undefined;

  bookForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    pageCount: new FormControl('', Validators.required),
    excerpt: new FormControl('', Validators.required),
    publishDate: new FormControl('', Validators.required)
  });


  constructor(private fb: FormBuilder,
    private router: Router,
    private service: BookService,
    config: NgbModalConfig,
    private dialog: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit(): void {
    let datos = localStorage.getItem('datos');
    if (datos) {
      let data = JSON.parse(datos);
      console.log(data);
      this.bookForm.controls['id'].setValue(data.id);
      this.bookForm.controls['title'].setValue(data.title);
      this.bookForm.controls['description'].setValue(data.description);
      this.bookForm.controls['pageCount'].setValue(data.pageCount);
      this.bookForm.controls['excerpt'].setValue(data.excerpt);
      this.bookForm.controls['publishDate'].setValue(data.publishDate); 
    }
  }

  openLg(content: any) {
    this.dialog.open(content, { size: 'lg' });
  }
  openXl(content: any) {
    this.dialog.open(content, { size: 'xl' });
  }

  onSubmit() {
    console.log(this.bookForm);
    this.service.createBook(this.bookForm.value).subscribe((data: any) => {
      alert("Libro actualizado correctamente");
      this.dialog.dismissAll();
      this.router.navigate(['/books'])
      window.location.reload();
    })
  }

  closeModal(){
    this.dialog.dismissAll();
  }
}
