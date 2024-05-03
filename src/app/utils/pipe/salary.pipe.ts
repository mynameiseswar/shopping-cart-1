import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary',
  standalone: true,
  pure: true
})
export class SalaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
console.log(value);
    let x = value * 100;
    return x.toFixed(args);
  }

}
