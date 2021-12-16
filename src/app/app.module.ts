import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { CreateBookComponent } from './components/books/create-book/create-book.component';
import { ReadBookComponent } from './components/books/read-book/read-book.component';
import { UpdateBookComponent } from './components/books/update-book/update-book.component';
import { DeleteBookComponent } from './components/books/delete-book/delete-book.component';

import { CreateAuthorComponent } from './components/authors/create-author/create-author.component';
import { ReadAuthorComponent } from './components/authors/read-author/read-author.component';
import { UpdateAuthorComponent } from './components/authors/update-author/update-author.component';
import { DeleteAuthorComponent } from './components/authors/delete-author/delete-author.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ExportExcelComponent } from './components/export-excel/export-excel.component';
import { WsdlComponent } from './components/wsdl/wsdl.component';
import { SearchByComponent } from './components/search-by/search-by.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRouterModule } from './app-router-module';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTablesModule } from "angular-datatables";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthorService } from './services/author.service';
import { BookService } from './services/book.service';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    ReadAuthorComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    
    CreateAuthorComponent,
    UpdateAuthorComponent,
    ReadBookComponent,
    DeleteAuthorComponent,
    TruncatePipe,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ExportExcelComponent,
    WsdlComponent,
    SearchByComponent,
    HeaderComponent,
    FooterComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule, AppRouterModule, HttpClientModule,DataTablesModule, 
    ReactiveFormsModule, NgbModule, FormsModule, FontAwesomeModule
  ],
  entryComponents:[UpdateAuthorComponent,UpdateBookComponent],
  providers: [BookService, AuthorService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }