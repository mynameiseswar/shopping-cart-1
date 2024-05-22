import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInfo } from '../../core-components/product-item/product-item.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private selectedProdut = {};

  constructor(
    private httpClient: HttpClient
  ) { }

  setSelectedProductInformation(product: ProductInfo | any) {
    this.selectedProdut = product;
    console.log(this.selectedProdut)
  }

  getSelecteProductInformation() {
    return this.selectedProdut;
  }
  getProductList(){
    return this.httpClient.get('https://dummyjson.com/products');
  }

  getProductDetails(productId: number) {
    return this.httpClient.get(`https://dummyjson.com/products/${productId}`);
  }
}
