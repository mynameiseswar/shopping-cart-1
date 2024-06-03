import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [],
  templateUrl: './left.component.html',
  styleUrl: './left.component.scss'
})
export class LeftComponent {

  buttons = Array.from({length: 20},(_,i)=>i+1);

  constructor(
    private feedbackService: FeedbackService
  ){}

  handelClick(target: number){
    this.feedbackService.setUserAction(target);
  }
}
