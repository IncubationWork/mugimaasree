import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationFilterPipe'
})
export class LocationFilterPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
