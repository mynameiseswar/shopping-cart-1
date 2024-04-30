import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface IStudent{
  name: string,
  address: string,
  mobile: string;
  totalMarks: number,
  isLeader?: boolean
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping-cart';
  sNo: string | number | boolean | undefined | null = 10;

  totalMarks!: Number;

  // studentMarks = [10,'20',false, undefined,null];

  studentMarks: Array<number | string | Array<number>> = [10,20,30,'40',[10,20]];

  student: IStudent = {
    name: 'Raju',
    address: 'Hyd',
    mobile: "+91-2343234569",
    totalMarks: 100,
    isLeader: false
  }

  student1: IStudent = {
    name: 'Raju',
    address: 'Hyd',
    mobile: "+91-2343234569",
    totalMarks: 100
  }

  studentList: Array<IStudent>  =[];



  additionaInformation: any;



  constructor(){
this.additionaInformation = 10;
this.additionaInformation = false;
this.additionaInformation = 'Raju';
this.additionaInformation = null;
this.additionaInformation = undefined;
this.additionaInformation =[];
this.additionaInformation ={}




  console.log(this.title)
  console.log(this.totalMarks)
  this.sNo = '10';
  this.sNo = false;
  this.sNo = undefined;
  this.sNo = null;
  console.log(this.sNo)

  }

}
