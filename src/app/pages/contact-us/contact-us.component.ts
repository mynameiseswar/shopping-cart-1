import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {

  myForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ){
    this.myForm = this.fb.group({
      name: [''],
      skills: this.fb.array([])
    });


  }
  ngOnInit(): void {}


  get skills(): FormArray{
    return this.myForm.get('skills') as FormArray;
  }

  handelFormSubmit(){
    console.log(this.myForm.value)
    console.log(this.myForm.valid)
  }

  newSkills(): FormGroup{
    return this.fb.group({
      skill: ['', [Validators.required]],
      exp: ''
    });
  }

  handelAddSkill(){
    this.skills.push(this.newSkills())
  }

  deleteSkill(taregetIndex: number){
    this.skills.removeAt(taregetIndex);
  }

}
