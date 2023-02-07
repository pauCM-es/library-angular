import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiNYT_url: string = 'https://api.nytimes.com/svc/books/v3/'
  bestSellers_url: string = 'lists/current/hardcover-fiction.json'
  apiNYT_key: string = '?api-key=JaJyTjgJLZAJvAQ3hfqju1TllYnjuZjO'
  
  apiGoogle_url: string = 'https://www.googleapis.com/books/v1/volumes?q='
  byTitle: string = `intitle:`
  byAuthor: string = `inauthor:`
  apiGoogle_key: string = '&key=AIzaSyB7It2SRc8xaK8TwRMBdy1I3bqbtVXVHCY'

  constructor(private http: HttpClient) { }

  fetchBestSellers(){
    return this.http.get(`${this.apiNYT_url}${this.bestSellers_url}${this.apiNYT_key}`)
  }

  searchBook(title:string){
    const intitle: string = title.toLowerCase().replaceAll(' ', '-')
  }
}
