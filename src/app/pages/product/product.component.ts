import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  x: number | null = null;
  y: number | null = null;

  operationType: string = 'sub';

  handelFirstNumebrChagne(e: any) {
    this.x = e;
    this.doOperation();
  }

  handelSecoundNumebrChagne(e: any) {
    this.y = e;
    this.doOperation()
  }

  doOperation() {
    if (this.x && this.y && !isNaN(this.x) && !isNaN(this.y)) {
      let result = 0;
      switch (this.operationType.trim().toLowerCase()) {
        case 'sum':
          result = Number(this.x) + Number(this.y)
          break;
        case 'sub':
          result = this.x - this.y
          break;
        case 'multi':
          result = this.x * this.y
          break;
        case 'div':
          result = this.x / this.y
          break;
      }
      console.log(result)
    }
  }

  findSum() {
    if (this.x && this.y && !isNaN(this.x) && !isNaN(this.y)) {
      console.log(Number(this.x) + Number(this.y))
    }
  }

  handelOpertioTypeChange(e: any) {
    this.operationType = e;
    this.doOperation();
  }
}
