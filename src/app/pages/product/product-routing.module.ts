import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { TabOneComponent } from './tab-one/tab-one.component';

const routes: Routes = [
  {
    path:'',
    component: ProductComponent,
    children:[
      {
        path: '',
        redirectTo:'/products/tab-one',
        pathMatch: 'full'
      },
      {
        path:'tab-one',
        component: TabOneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
