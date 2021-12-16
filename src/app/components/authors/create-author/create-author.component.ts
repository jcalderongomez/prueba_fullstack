import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthorService } from '../../../services/author.service';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent implements OnInit {

  lstBooks: Array<any> = [];
  constructor(private service: AuthorService,
    private router: Router,
    private bookService: BookService) {

  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((response: any) => {
      this.lstBooks = response.result;
    })
  }

  authorForm = new FormGroup({
    idBook: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log(this.authorForm);
    this.service.createAuthor(this.authorForm.value).subscribe((data: any) => {
      Swal.fire('Autor creado correctamente')
      this.router.navigate(['/authors']);
      window.location.reload();

    })
  }
}
