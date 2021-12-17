import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { AuthorService } from '../../services/author.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-search-by',
  templateUrl: './search-by.component.html',
  styleUrls: ['./search-by.component.scss']
})
export class SearchByComponent implements OnInit {
  lstAuthors: Array<any> = [];
  data:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  model1: NgbDateStruct | undefined;
  model2: NgbDateStruct | undefined;
  constructor(private authorService: AuthorService,private bookService: BookService,
    private router: Router) { }
    findBooks = new FormGroup({
      idAuth: new FormControl('', Validators.required),
      finicio: new FormControl('', Validators.required),
      ffin: new FormControl('', Validators.required)
    })
  
  ngOnInit(): void {
    this.loadAuthors();
  }
  onSubmit(){
    console.log(this.findBooks.value);
    this.bookService.findBook(this.findBooks.value).subscribe((response: any) => {
      let resul = response.result;
    })
  }
  loadAuthors() {
    this.authorService.getAuthors().subscribe((response: any) => {
      this.lstAuthors = response.result;
      
        this.data = response.result;
          this.dtTrigger.next(0);
    })
  }
}