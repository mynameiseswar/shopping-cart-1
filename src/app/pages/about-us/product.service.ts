import { Injectable } from '@angular/core';
import { ProductInfo } from '../../core-components/product-item/product-item.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private selectedProdut ={};

  constructor() { }

  setSelectedProductInformation(product: ProductInfo | any){
    this.selectedProdut = product;
    console.log(this.selectedProdut)
  }

  getSelecteProductInformation(){
    return this.selectedProdut;
  }
}
