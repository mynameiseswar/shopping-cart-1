import { ProductItemComponent } from './../../core-components/product-item/product-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    children: [
      {
        path: '',
        redirectTo: 'product-list',
        pathMatch: 'full'
      },
      {
        path: 'product-list',
        loadComponent: () => import('./product-list/product-list.component').then( c => c.ProductListComponent)
      },
      {
        path: 'product-details/:prodcutId',
        loadComponent: () => import('./product-details/product-details.component').then( c => c.ProductDetailsComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
