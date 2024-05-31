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

  userReg = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(),
    dob: new FormControl(),
    gender: new FormControl(),
    userType: new FormControl(),
    mobile: new FormControl(),
    index: new FormControl(new Date().valueOf())
  });

  submitted = false;
  usersList: any = [];

  handelSubmit() {

    this.submitted = true;
    if (this.userReg.valid) {
      let findIndex = this.usersList.filter(
        (e: any) => e.index == this.userReg.value.index
      );
      if (findIndex.length == 0) {
        this.usersList.push(this.userReg.value);
      }else{
        this.usersList = this.usersList.map(
          (e: any) =>{
            if(e.index == this.userReg.value.index){
              e = this.userReg.value;
            }
            return e;
          }
        );
      }
      this.userReg.reset();
      this.userReg.patchValue({
        index: new Date().valueOf()
      })
      this.submitted = false;
    }
  }

  handelEditRow(selectedRow: any) {
    this.userReg.patchValue(selectedRow)
  }

}
