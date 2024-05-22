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
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  productId = null;
  prodcutDetails!: ProductInfo | any;
  productKeys!: Array<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    let selectedProduct: ProductInfo | any = this.productService.getSelecteProductInformation();


    this.productId = selectedProduct['id'];

    if (!this.productId) {
      this.router.navigate(['/about-us/product-list']);
      return;
    }

    this.productService.getProductDetails(this.productId).subscribe(
      (details: ProductInfo | any) => {
        this.prodcutDetails = details;

              this.productKeys = Object.keys(this.prodcutDetails);
      }
    );
  }
}
