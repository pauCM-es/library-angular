import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { CollectionComponent } from './components/collection/collection.component';
import { NavigatorComponent } from './shared/navigator/navigator.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { CatalogeService } from './shared/cataloge.service';
import { ApiService } from './shared/api.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailsComponent,
    CollectionComponent,
    NavigatorComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CatalogeService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
