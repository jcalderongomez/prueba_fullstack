import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { BookInterface } from '../../../interfaces/BookInteraface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateBookComponent } from '../update-book/update-book.component';
import { Router } from '@angular/router';
import { faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import { faEraser} from '@fortawesome/free-solid-svg-icons/faEraser';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-read-book',
  
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.scss']
})
export class ReadBookComponent implements OnInit {

  date: { year: number; month: number; } | undefined;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data: any;
  faEdit = faEdit;
  faEraser=faEraser;
  
  constructor(private http: HttpClient,
    private service: BookService,
    private router: Router,
    private dialog: NgbModal,
    private bookService: BookService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    this.service.getBooks().subscribe((res:any)=>{
      this.data = res.result;
        this.dtTrigger.next(0);
      },(errorData)=>this.router.navigate(['/login']));
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  
  synBooks(){
    this.http.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
    .subscribe((res: any) => {
      this.data=res;
      console.log("creando");
      this.bookService.createBooks(this.data).subscribe((res:any)=>{
        console.log("creando en api");
        Swal.fire(res.displayMessage);
        
      })
    });
  }
  
  updateBook(book: BookInterface) {
    console.log(book);
    let datos = JSON.stringify(book);
    localStorage.setItem('datos', datos);
    this.dialog.open(UpdateBookComponent, { size: 'xl' });
  }

  closeModal(){
    this.dialog.dismissAll();
    window.location.reload();
  }
}