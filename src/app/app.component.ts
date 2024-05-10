import { HomeComponent } from './core-components/pages/home/home.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullNamePipe } from './utils/pipe/full-name.pipe';
import { SalaryPipe } from './utils/pipe/salary.pipe';
import { MyButtonComponent } from './core-components/my-button/my-button.component';
import { AppHeaderComponent } from './core-components/app-header/app-header.component';
import { MenuListComponent } from './core-components/menu-list/menu-list.component';
import { AboutUsComponent } from './core-components/pages/about-us/about-us.component';
import { FeedbackComponent } from './core-components/pages/feedback/feedback.component';
import { ContactUsComponent } from './core-components/pages/contact-us/contact-us.component';

export interface IStudent{
  name: string,
  address: string,
  mobile: string;
  totalMarks: number,
  isLeader?: boolean
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FullNamePipe,
    SalaryPipe,
    MyButtonComponent,
    AppHeaderComponent,
    MenuListComponent,
    HomeComponent,
    AboutUsComponent,
    FeedbackComponent,
    ContactUsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(){}

}
