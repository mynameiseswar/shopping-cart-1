import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductInfo, ProductItemComponent } from '../../../core-components/product-item/product-item.component';
import { ProductService } from '../product.service';


export interface ProductList {
  products: Array<ProductInfo>
}
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductItemComponent,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {


  productList = [];

  constructor(
    private httpClient: HttpClient,
    private productService: ProductService
  ) {
    this.httpClient.get('https://dummyjson.com/products').subscribe(
      (listOfProducts: ProductList | any) => {
        if (listOfProducts && listOfProducts.hasOwnProperty('products')) {
          this.productList = listOfProducts.products;
        }
      }
    )
  }
}
