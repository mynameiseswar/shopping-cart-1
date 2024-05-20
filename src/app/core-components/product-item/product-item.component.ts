import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface ProductInfo {
  "id": number;
  "title": string;
  "description": string;
  "price": number;
  "discountPercentage": number;
  "rating": number;
  "stock": number;
  "brand": string,
  "category": string,
  "thumbnail": string,
  "images": Array<string>
}

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() prodcutDetails!: ProductInfo;

  constructor(
    private router: Router
  ) {

  }

  onProductDetails(){
    this.router.navigate(['/about-us/product-details']);
  }
}
