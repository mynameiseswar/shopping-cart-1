import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInfo } from '../../core-components/product-item/product-item.component';
import { HtpClientService } from '../../htp-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private selectedProdut = {};

  constructor(
    private htpClientService: HtpClientService
  ) { }

  setSelectedProductInformation(product: ProductInfo | any) {
    this.selectedProdut = product;
    console.log(this.selectedProdut)
  }

  getSelecteProductInformation() {
    return this.selectedProdut;
  }
  getProductList(){
    return this.htpClientService.getCall('products');
  }



  getProductDetails(productId: number) {
    return this.htpClientService.getCall(`products/${productId}`);
  }
}
