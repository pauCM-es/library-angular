import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from 'src/app/interfaces/i-book';

@Injectable({
  providedIn: 'root'
})
export class ApiNytService {

  apiNYT_url: string = 'https://api.nytimes.com/svc/books/v3/'
  bestSellers_url: string = 'lists/current/hardcover-fiction.json'
  apiNYT_key: string = '?api-key=JaJyTjgJLZAJvAQ3hfqju1TllYnjuZjO'

  bestSellers: IBook[] = []

  constructor(private http: HttpClient) { }

  fetchBestSellers(){
    return this.http.get(`${this.apiNYT_url}${this.bestSellers_url}${this.apiNYT_key}`)
  }
  getBestSellers(){
    return this.bestSellers
  }
  setBestSellers(books:any[]){
    for (const book of books) {
      this.bestSellers = [
        ...this.bestSellers,
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

}
