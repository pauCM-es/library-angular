import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiGoogleService {

  apiGoogle_url: string = 'https://www.googleapis.com/books/v1/volumes?q='
  byTitle: string = `intitle:`
  byAuthor: string = `inauthor:`
  apiGoogle_key: string = '&key=AIzaSyB7It2SRc8xaK8TwRMBdy1I3bqbtVXVHCY'
  
  constructor(private http: HttpClient) { }

  searchBook(title:string){
    const intitle: string = title.toLowerCase().replaceAll(' ', '-')
  }
  
}
