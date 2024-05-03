import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullNamePipe } from './utils/pipe/full-name.pipe';
import { SalaryPipe } from './utils/pipe/salary.pipe';
import { MyButtonComponent } from './core-components/my-button/my-button.component';

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
  imports: [RouterOutlet, CommonModule, FullNamePipe, SalaryPipe, MyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  


  employeList = [

    {
      firstName: 'Raju',
      lastName: 'K',
      salary: 200,
    },
    {
      firstName: 'Siva',
      lastName: 'K',
      salary: 140,
    },
    {
      firstName: 'Venkat',
      lastName: 'B',
      salary: 1000,
    },
    {
      firstName: 'Bhanu',
      lastName: 'P',
      salary: 300,
    },
    {
      firstName: 'Manu',
      lastName: 'A',
      salary: 100,
    },
    {
      firstName: 'Prasad',
      lastName: 'T',
      salary: 100,
    },
  ]

 
  constructor(){}


 

  // totalAmount = 1.1234567;

  // todayDate = new Date();


  boxStatus = false;


  showMeBox(){
    this.boxStatus = !this.boxStatus;
  }
  

  appButtonClicked(e: string){
    //console.log("App Button Got Clicked.................");

    console.log(e)
  }
}
