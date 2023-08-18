import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationFilter'
})
export class LocationFilterPipe implements PipeTransform {
  transform(locations: any[], searchText: string): any[] {
    if (!locations) {
      return [];
    }
    if (!searchText) {
      return locations;
    }

    searchText = searchText.toLowerCase();
    return locations.filter(location => {
      return location.name.toLowerCase().includes(searchText);
    });
  }
}
