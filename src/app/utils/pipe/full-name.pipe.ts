import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
  standalone: true
})
export class FullNamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return `${value.firstName} ${value.lastName}`;
  }

}
