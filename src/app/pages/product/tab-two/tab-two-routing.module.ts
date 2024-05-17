import { TabTwoComponent } from './tab-two.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    //component: TabTwoComponent
    loadComponent: () => import('./tab-two.component').then(m => TabTwoComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabTwoRoutingModule { }
