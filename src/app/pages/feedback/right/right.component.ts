import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [],
  templateUrl: './right.component.html',
  styleUrl: './right.component.scss'
})
export class RightComponent {
  eventsList: Array<number> =[]
  constructor(private feedbackService: FeedbackService){
    this.feedbackService.getUserAction().subscribe(
      (data: any) =>{
        console.log(data)
        this.eventsList.push(data);
      }
    );
  }
}
