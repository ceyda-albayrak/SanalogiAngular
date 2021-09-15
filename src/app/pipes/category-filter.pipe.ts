import { Category } from 'src/app/models/category';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value:Category[], filterText:string, filterMetaData: any): Category[] {
    if(!value) return []
    
    if(!filterText){
      filterMetaData.count=value.length;
      return value;
    }
    filterText = filterText.toLowerCase();
    let sonuc= filterText? value.filter((c:Category)=>  c.kategori.toLocaleLowerCase().indexOf(filterText)!==-1):value;
    filterMetaData.count=sonuc.length;
    return sonuc;

    
    }

  }

  


