import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/i-book';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogeService {

  allBooks:any = {
    myCollection: [],
    bestSellers: []
  }

  constructor(private api: ApiService) { }

  getMyCollection(){
    return this.allBooks.myCollection
  }

  
  searchBook(title:string){
    const intitle: string = title.toLowerCase().replaceAll(' ', '-')
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
  
  getBestSellers(){
    return this.allBooks.bestSellers
  }
  setBestSellers(books:any[]){
    for (const book of books) {
      this.allBooks.bestSellers = [
        ...this.allBooks.bestSellers,
        {
          title: book.title,
          author: book.author,
          cover: book.book_image,
          description: book.description,
          read: false
        }
      ] 
    }
  }
  fetchBestSellers(){
    this.api.fetchBestSellers().subscribe(data => {
      const dataFetch:any = data
      this.setBestSellers(dataFetch.results.books)
    })
  }

}
