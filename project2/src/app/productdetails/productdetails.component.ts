import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  searchProd:string=""
 
  products:any = []
  constructor(private cartService: CartService, private productServiceService:ProductServiceService){
    // this.products = productServiceService.getProductsInfo()
    this.productServiceService.getProductsInfo().subscribe(res => this.products=res)
  }
  addToCart(product:any){

    this.cartService.addToCart(product);
 
    }
}
