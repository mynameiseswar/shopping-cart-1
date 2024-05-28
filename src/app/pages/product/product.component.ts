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
  });

  submitted = false;

  handelSubmit(){

  this.submitted = true;
    console.log(this.userReg.valid)
    console.log(this.userReg.value)
  }

}
