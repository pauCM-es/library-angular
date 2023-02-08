import { Injectable } from '@angular/core';
import { IBook } from '../../interfaces/i-book';

@Injectable({
  providedIn: 'root'
})
export class CatalogeService {

  allBooks:any = {
    myCollection: [],
    bestSellers: []
  }

  constructor() { }

  getMyCollection(){
    return this.allBooks.myCollection
  }
  
  addToCollection(book: IBook) {
    this.allBooks.myCollection = [
      ...this.allBooks.myCollection,
      {
        ...book,
        id: this.allBooks.myCollection[(this.allBooks.myCollection.length - 1)].id + 1
      }
    ]
    console.log(this.allBooks.myCollection);
  }
  
  dropOfCollection(book: IBook) {
    this.allBooks.myCollection = [...this.allBooks.myCollection.filter((bookFilter:IBook) => bookFilter.id !== book.id)]
  }

}
