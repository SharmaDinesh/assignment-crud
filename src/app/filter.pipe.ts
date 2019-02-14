import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(obj => {
      if (typeof items[0] !== typeof {}) {
        return obj.toLowerCase().includes(searchText);
      } else {
          if (obj.title.toLowerCase().includes(searchText)) {
            return obj;
        }
      }
    });
  }

}