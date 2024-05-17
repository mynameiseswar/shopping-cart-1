import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  // standalone: true,
  // imports: [
  //   RouterModule
  // ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  tabList = [
    {
      title: 'Tab 1',
      link: '/products/tab-one'
    },
    {
      title: 'Tab 2',
      link: '/products/tab-two'
    },
    {
      title: 'Tab 3',
      link: '/products/tab-three'
    },
    {
      title: 'Tab 1',
      link: '/products/tab-1'
    },
    {
      title: 'Tab 2',
      link: '/products/tab-2'
    },
    {
      title: 'Tab 3',
      link: '/products/tab-3'
    },
  ]

}
