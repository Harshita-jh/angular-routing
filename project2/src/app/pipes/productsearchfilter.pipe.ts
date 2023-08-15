import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsearchfilter'
})
export class ProductsearchfilterPipe implements PipeTransform {

  transform(prod:any, value:any):any {

    value = value.toLowerCase();
    
    return prod.filter(function(item:any){
    
    return (item.productName).toLowerCase().startsWith(value);
    
    });
    
    }

}
