import { Component } from '@angular/core';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    LeftComponent,
    RightComponent
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  inputValue = true;

  reload(){
    this.inputValue = !this.inputValue;
  }
}
