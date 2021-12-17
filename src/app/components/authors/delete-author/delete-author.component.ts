import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../../services/author.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-author',
  templateUrl: './delete-author.component.html',
  styleUrls: ['./delete-author.component.scss']
})
export class DeleteAuthorComponent implements OnInit {
  id: any;


  author = {
    id: '',
    bookId: '',
    firstName: '',
    lastName: ''
  }
  constructor(private service: AuthorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllAuthor();
  }


  getAllAuthor(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getAuthor(this.id).subscribe((data: any) => {
      this.author.id = data.result.id;
      this.author.bookId = data.result.bookId;
      this.author.firstName = data.result.firstName;
      this.author.lastName = data.result.lastName;
    });
  }

  cancel() {
    Swal.fire('Se ha cancelado la operación');
    this.router.navigate(['/authors'])
  }

  confirm() {
    this.service.deleteAuthor(this.id).subscribe((data: any) => {
      Swal.fire('Registro Eliminado');
      this.router.navigate(['/authors']);
    })
  }
}
