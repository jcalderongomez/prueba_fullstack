import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {

  id: any;

  book = {
    title: '',
    description: '',
    pageCount: '',
    excerpt: '',
    publishDate: ''
  }
  constructor(private service: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getBook(this.id).subscribe((data: any) => {
      console.log("datos a eliminar: " + data);
      this.book.title = data.result.title;
      this.book.description = data.result.description;
      this.book.pageCount = data.result.pageCount;
      this.book.excerpt = data.result.excerpt;
      this.book.publishDate = data.result.publishDate;
    })
  }
  cancel() { 
    Swal.fire('Se ha cancelado la operación');
    this.router.navigate(['/'])
  }

  confirm() { 
    this.service.deleteBook(this.id).subscribe((data: any)=>{
      Swal.fire('Registro Eliminado');
      this.router.navigate(['books']);
    })
  }
}