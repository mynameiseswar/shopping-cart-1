import { ProductService } from './../product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductInfo } from '../../../core-components/product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  productId = null;
  prodcutDetails!: ProductInfo | any;
  productKeys!: Array<any>;
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    let selectedProduct: ProductInfo | any =  this.productService.getSelecteProductInformation();


    this.productId = selectedProduct['id'];

    if(!this.productId){
      this.router.navigate(['/about-us/product-list']);
      return;
    }

    this.httpClient.get(`https://dummyjson.com/products/${this.productId}`).subscribe(
            (details: any) => {
              this.prodcutDetails = details;

              this.productKeys = Object.keys(this.prodcutDetails);
            }
          );

    // this.route.params.subscribe(
    //   (params: any) => {
    //     if (params) {
    //       this.productId = params.prodcutId;
    //       this.httpClient.get(`https://dummyjson.com/products/${this.productId}`).subscribe(
    //         (details: any) => {
    //           this.prodcutDetails = details;

    //           this.productKeys = Object.keys(this.prodcutDetails);
    //         }
    //       );
    //     }
    //   }
    // );

  }
}
