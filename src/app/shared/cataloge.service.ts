import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogeService {
  
  allBooks:any = {
    myCollection: [],
    bestSellers: []
  }

  constructor(private catalogeService: CatalogeService) { }


}
