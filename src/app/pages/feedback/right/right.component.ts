import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation, viewChild } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './right.component.html',
  styleUrl: './right.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class RightComponent implements OnInit, OnChanges {
  @ViewChild('myLabel',{static: false}) myLabel: ElementRef | any;
  eventsList: Array<number> =[]
  constructor(private feedbackService: FeedbackService){
    this.feedbackService.getUserAction().subscribe(
      (data: any) =>{
       // console.log(data)
        this.eventsList.push(data);
      }
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.myLabel);
  }

  boxStatus = false;
  updateBox(){
    this.boxStatus = !this.boxStatus;
  }

  ngOnInit(): void {
    console.log(this.myLabel);
  }

}
