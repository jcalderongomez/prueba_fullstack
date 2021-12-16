import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreateAuthorComponent } from "./components/authors/create-author/create-author.component";
import { ReadAuthorComponent } from "./components/authors/read-author/read-author.component";
import { UpdateAuthorComponent } from "./components/authors/update-author/update-author.component";
import { DeleteAuthorComponent } from "./components/authors/delete-author/delete-author.component";

import { CreateBookComponent } from "./components/books/create-book/create-book.component";
import { ReadBookComponent } from "./components/books/read-book/read-book.component";
import { UpdateBookComponent } from "./components/books/update-book/update-book.component";
import { DeleteBookComponent } from "./components/books/delete-book/delete-book.component";

import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { ExportExcelComponent } from "./components/export-excel/export-excel.component";
import { WsdlComponent } from "./components/wsdl/wsdl.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchByComponent } from "./components/search-by/search-by.component";

const routes:Routes = [
    {path: '', component: LoginComponent},
    {path: 'create-book', component: CreateBookComponent},
    {path: 'books', component: ReadBookComponent},
    {path: 'books/delete-book/:id',component: DeleteBookComponent},
    {path: 'create-author', component: CreateAuthorComponent},
    {path: 'authors', component: ReadAuthorComponent},
    {path: 'update-wsdl', component: UpdateBookComponent},
    {path: 'export-excel', component: ExportExcelComponent},
    {path: 'search-by', component:SearchByComponent},
    {path: 'authors/delete-author/:id',component: DeleteAuthorComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component:LoginComponent},
    {path: 'home', component:HomeComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}