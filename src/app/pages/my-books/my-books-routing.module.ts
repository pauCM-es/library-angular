import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from 'src/app/components/book-details/book-details.component';
import { NewBookComponent } from 'src/app/components/new-book/new-book.component';
import { MyBooksComponent } from './my-books.component';

const routes: Routes = [
  {
    path: '', component: MyBooksComponent
  },
  {
    path: 'add', component: NewBookComponent
  },
  {
    path: ':id', component: BookDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyBooksRoutingModule { }
