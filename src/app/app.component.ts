import { CommonModule } from '@angular/common';
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
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  showBox = 'green';
  student = [10,'Raju','Hyd','+91-232345432', null, undefined,[10,20,30,40],{sName: 'Raju'}];

  hotelList =[
    {
      hotelName: 'ABC',
      address: 'hyd',
      isOpen: true,
      id: 1001
    },
    {
      hotelName: 'XYZ',
      address: 'hyd',
      isOpen: false,
      id: 1002
    },
    {
      hotelName: 'MNO',
      address: 'hyd',
      isOpen: true,
      id: 1003
    },
    {
      hotelName: 'KFC',
      address: 'hyd',
      isOpen: false,
      id: 1004
    }
  ];
 
  constructor(){}


  showBoxType(boxType: string){
    this.showBox = boxType;
  }

 

  totalAmount = 100;
  

  
}
