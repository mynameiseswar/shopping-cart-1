import { Component } from '@angular/core';
import { MyButtonComponent } from '../my-button/my-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MyButtonComponent,
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

  menuAction(target: string){
    console.log(target)
  }

}
