import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixToDate',
  standalone: true
})
export class UnixToDatePipe implements PipeTransform {

  transform(value: number): Date {
    return new Date(value * 1000);
  }

}
