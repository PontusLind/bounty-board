import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})

export class OrderByPipe implements PipeTransform {
    transform(items: any[], boolVar: boolean): any[] {
      if(!items) return [];
      if(!boolVar) return items;
      if(boolVar = false) return items.filter(item => {
        for (let key in item) {
          console.log(boolVar);
          if ((typeof item[key] === 'string' || item[key] instanceof String) && 
              (item[key].indexOf("name") !== -1)) {
            return true;
          }
        }
      });
      return items.sort(function(a, b){
        if(a.reward < b.reward){
            return 1;
        }
        else if( a.reward > b.reward){
            return -1;
        }
        else{
            return 0;
        }
    });

     }
  }

