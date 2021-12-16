import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthorInterface } from '../../../interfaces/AuthorInterface';
import { UpdateAuthorComponent } from '../../authors/update-author/update-author.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthorService } from '../../../services/author.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-read-author',
  templateUrl: './read-author.component.html',
  styleUrls: ['./read-author.component.scss']
})
export class ReadAuthorComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data: any;
  

  constructor(private http: HttpClient,
    private dialog: NgbModal,
    private service: AuthorService,
    private router : Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    this.service.getAuthors().subscribe((res:any)=>{
      this.data = res.result;
        this.dtTrigger.next(0);
      },(errorData)=>this.router.navigate(['/login']));
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    console.log(this.dialog);
  }

  synAuthors(){
    this.http.get('https://fakerestapi.azurewebsites.net/api/v1/Authors')
    .subscribe((res: any) => {
      this.data=res;
      console.log("creando sync_autores");
      this.service.createAuthors(this.data).subscribe((res:any)=>{
        console.log("creando en api");
        Swal.fire(res.displayMessage);
      })
    });
  }

  
  updateAuthor(book: AuthorInterface) {
    console.log(book);
    let datos = JSON.stringify(book);
    localStorage.setItem('datos',datos);
    this.dialog.open(UpdateAuthorComponent);
  }
}