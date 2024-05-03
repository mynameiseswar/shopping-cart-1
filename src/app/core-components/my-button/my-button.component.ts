import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss'
})
export class MyButtonComponent {

  // buttonTitle = 'ABC';


  @Input('title') buttonTitle: string = 'Click Me';

  @Input('className') className: string ='';
  @Input() type!: string;

  @Output() buttonClicked = new EventEmitter<string>();

  buttonClick(){
    // console.log("Button Clicked");
    this.buttonClicked.emit(this.type);
  }

}
