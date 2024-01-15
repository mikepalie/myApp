import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fulltime'
})
export class FulltimePipe implements PipeTransform {

  transform(value: number): string {

    let hours: number = Math.floor( value / 60);
    let minutes: number = value % 60;
    let result: string = `${hours}h ${minutes}min`;

    return result;
  }

}
