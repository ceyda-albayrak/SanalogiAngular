import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value:Category[], filterText:string, filterMetaData: any): Category[] {
    if(!value) return [];
    if(!filterText) {
      filterMetaData.count = value.length;
      return value;
    }
    filterText = filterText.toLowerCase();

    let filteredItems = value.filter( c => {
      return c.kategori.toLowerCase().includes(filterText);
    });
    filterMetaData.count = filteredItems.length;
    return filteredItems;

    }

  }

  


