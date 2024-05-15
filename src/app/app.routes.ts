import { Routes } from '@angular/router';
import { HomeComponent } from './core-components/pages/home/home.component';
import { AboutUsComponent } from './core-components/pages/about-us/about-us.component';
import { ProductsComponent } from './core-components/pages/products/products.component';
import { FeedbackComponent } from './core-components/pages/feedback/feedback.component';
import { ContactUsComponent } from './core-components/pages/contact-us/contact-us.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  }
];
