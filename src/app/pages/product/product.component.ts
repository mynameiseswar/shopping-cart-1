import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  x: number | null | undefined = null;
  y: number | null | undefined = null;
  operationType: string | null | undefined = 'sub';

  mathForm = new FormGroup({
    x: new FormControl(null,[Validators.required]),
    y: new FormControl(null, [Validators.required]),
    operationType: new FormControl('sum',[])
  });



  result = 0;

  handelSubmit(){
    if(this.mathForm.valid){
    this.x = this.mathForm.value.x;
    this.y = this.mathForm.value.y;
    this.operationType = this.mathForm.value.operationType;
    this.doOperation();
    }else{
      console.log('From is Invalid')
    }
  }


  handelFirstNumebrChagne(e: any) {
    this.x = e;
    this.doOperation();
  }

  handelSecoundNumebrChagne(e: any) {
    this.y = e;
    this.doOperation()
  }

  doOperation() {
    if (this.x && this.y && !isNaN(this.x) && !isNaN(this.y) && this.operationType) {

      switch (this.operationType.trim().toLowerCase()) {
        case 'sum':
          this.result = Number(this.x) + Number(this.y)
          break;
        case 'sub':
         this.result = this.x - this.y
          break;
        case 'multi':
          this.result = this.x * this.y
          break;
        case 'div':
          this.result = this.x / this.y
          break;
      }

    }
  }
  handelOpertioTypeChange(e: any) {
    this.operationType = e;
    this.doOperation();
  }
}
