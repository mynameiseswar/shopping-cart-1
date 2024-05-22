import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
    RouterModule
  ],
  providers: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {


  productList = [];

  constructor(
    private productService: ProductService
  ) {
    this.productService.getProductList().subscribe(
      (listOfProducts: ProductList | any) => {
        if (listOfProducts && listOfProducts.hasOwnProperty('products')) {
          this.productList = listOfProducts.products;
        }
      }
    )
  }
}
