import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixToDays',
  standalone: true
})
export class UnixToDaysPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) {
      return '';
    }

    const date = new Date(value * 1000); // Convertir el timestamp Unix a milisegundos
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return `${diffDays}`;
  }
}
