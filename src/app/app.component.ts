import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping-cart';

  x = 10;
  y = 20;

  //boxVisibalityStatus = false;
  // 0 - false
  // 1 - true

  boxVisibalityStatus = 0;
  // 0 - Hide Box
  // 1 - Show Box
  // 2 - Show the Message
  constructor(){
  }



  // showBox(){
  //   console.log('Show Box');
  //   this.boxVisibalityStatus = true;
  // }

  // hideBox(){
  //   console.log('Hide Box');
  //   this.boxVisibalityStatus = false;
  // }

  // toggleBox(){
  //   this.boxVisibalityStatus = !this.boxVisibalityStatus;
  // }
  

  
}
