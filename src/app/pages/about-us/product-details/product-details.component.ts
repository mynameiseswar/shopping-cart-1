import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      (params: any) => {
        if (params) {
          this.productId = params.prodcutId;
          this.httpClient.get(`https://dummyjson.com/products/${this.productId}`).subscribe(
            (details: any) => {
              this.prodcutDetails = details;

              this.productKeys = Object.keys(this.prodcutDetails);
            }
          );
        }
      }
    );

  }
}
