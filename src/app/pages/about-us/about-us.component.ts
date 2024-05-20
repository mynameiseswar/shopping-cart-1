import { Component } from '@angular/core';
import { ProductInfo, ProductItemComponent } from '../../core-components/product-item/product-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
