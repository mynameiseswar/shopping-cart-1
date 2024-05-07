import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyButtonComponent } from '../my-button/my-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MyButtonComponent,
    FontAwesomeModule
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

}
