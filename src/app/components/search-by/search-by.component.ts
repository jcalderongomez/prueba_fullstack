
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { AuthorService } from '../../services/author.service';
import { BookService } from '../../services/book.service';
import { DatePipe } from'@angular/common';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-search-by',
  templateUrl: './search-by.component.html',
  styleUrls: ['./search-by.component.scss'],
})
export class SearchByComponent implements OnInit {
  lstAuthors: Array<any> = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data: any=[];
  listalibros: any=[];
  
  model1: NgbDateStruct | undefined;
  model2: NgbDateStruct | undefined;
  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
    private router: Router

    
  ) {}


  findBooks = new FormGroup({
    //idAuth: new FormControl('', Validators.required),
    finicio: new FormControl('', Validators.required),
    ffin: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    // this.loadAuthors();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };

    
  }
  
  
  
  
  onSubmit() {
    this.bookService.findBook(this.findBooks.value).subscribe((res: any) => {
      console.log(res.result);
      this.data= res.result;
        this.dtTrigger.next(0);
      });

    
    
    /*
    console.log(this.findBooks.value);
    this.bookService.findBook(this.findBooks.value).subscribe((res: any) => {

      this.listalibros = res.result;
      this.router.navigate(['/books/']);
      //  this.dtTrigger.next(0);
      });
      */
  }







  loadAuthors() {
    this.authorService.getAuthors().subscribe((response: any) => {
      this.lstAuthors = response.result;
      console.log(response.result);
      this.data = response.result;
      this.dtTrigger.next(0);
    });
  }
}
