import { AfterContentChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './left.component.html',
  styleUrl: './left.component.scss'
})
export class LeftComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentChecked, OnDestroy  {

  buttons: any;

  @Input('load') load = false;

  constructor(
    private feedbackService: FeedbackService
  ){
    console.log("Component Load...")
  }
  ngAfterContentChecked(): void {
    console.log("View Checked")
  }
  ngAfterViewInit(): void {
    console.log('View Init')
  }
  ngDoCheck(): void {
    console.log("Do Check")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    this.buttons = Array.from({length: 20},(_,i)=>i+1);

   console.log('Component Init')
  }

  ngOnDestroy(): void {
    console.log(this.buttons);
    this.buttons = [];

    console.log(this.buttons);
    this.feedbackService.setUserAction(0);
    console.log('Component Destory/Delete')
  }

  handelClick(target: number){
    this.feedbackService.setUserAction(target);
  }
}
