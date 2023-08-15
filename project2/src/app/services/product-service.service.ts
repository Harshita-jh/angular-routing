import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private url:string = "assets/products.json"

  constructor(private httpClient:HttpClient){}

  getProductsInfo(){

    return this.httpClient.get(this.url)

  }
}
