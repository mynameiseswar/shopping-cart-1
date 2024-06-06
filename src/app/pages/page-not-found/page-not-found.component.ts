import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent implements AfterViewInit {


@ViewChild('customInput', {static: false}) customInput!: ElementRef;

ngAfterViewInit(): void {
  this.customInput.nativeElement.innerHTML = 'Hello';
  console.log(this.customInput.nativeElement)
}



}
