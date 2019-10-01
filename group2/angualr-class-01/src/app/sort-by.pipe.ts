import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(values: any[], args?: any): any
  {
    values.sort((a, b) =>
    {
      return a[args] - b[args]
    })

    return values;
  }

}