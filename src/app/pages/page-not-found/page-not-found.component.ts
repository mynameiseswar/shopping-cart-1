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
  // console.log(this.customInput.nativeElement)
}


students = ['Raju','Venkat','Siva','Manu'];

// student1 = this.students[0];
// student2 = this.students[1];

studentObj: any = {
  no: '123',
  name: 'Raju',
  address: 'Hyd'
}

studentObj2: any = undefined;



constructor(){
  //this.studentObj2 = JSON.parse(JSON.stringify(this.studentObj));

  // this.studentObj2 = Object.assign({},this.studentObj);

  console.log(this.studentObj2?.address);

  this.studentObj['address'] = 'Vizag';

  this.studentObj2['address'] = 'Hyd';
  console.log(this.studentObj);
  console.log(this.studentObj2);

//  let [student1, student2,...studenAll] = this.students;
//   console.log(student1)
//   console.log(student2)
//   console.log(studenAll)

//   let {no, name}: any = this.studentObj;



//   console.log(no);
//   console.log(name)

//   console.log( no +'-'+ name);

//   console.log(`${no}-${name}`)


}




}
