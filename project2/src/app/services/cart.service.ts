import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({

  providedIn: 'root'

})

export class CartService {

  items:any[]=[];

  constructor() { }

  private bsubject =new BehaviorSubject(this.items);

  observable = this.bsubject.asObservable();

  addToCart(data:any){

    this.items.push(data);

    this.bsubject.next(this.items);

  }

}