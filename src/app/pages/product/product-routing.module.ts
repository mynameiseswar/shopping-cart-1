import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

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
        //component: TabOneComponent
        loadComponent: () => import('./tab-one/tab-one.component').then(m => m.TabOneComponent)
      },
      {
        path: 'tab-two',
        loadChildren: () => import('./tab-two/tab-two.module').then(m => m.TabTwoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
