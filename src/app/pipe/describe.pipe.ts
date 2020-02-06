import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'describePipe'
})
export class DescribePipe implements PipeTransform {

  transform(value: string,limit?:number): any {
    if(!value) return null;
    let actual = (limit) ? limit : 100;
    return value.substr(0,actual)+'....';
  }

}
