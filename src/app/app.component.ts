import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullNamePipe } from './utils/pipe/full-name.pipe';
import { SalaryPipe } from './utils/pipe/salary.pipe';
import { MyButtonComponent } from './core-components/my-button/my-button.component';
import { AppHeaderComponent } from './core-components/app-header/app-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    AppHeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(){}

}
