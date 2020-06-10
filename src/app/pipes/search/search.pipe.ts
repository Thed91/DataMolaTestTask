import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(records: Array<any> = [], args?: any): any {
    if (args[0].genre === 'null'){
      args[0].genre = null;
    }
    if (args[0].premiere === 'null'){
      args[0].premiere = null;
    }
    if (!args[0].name && !args[0].genre && !args[0].premiere ) {
          return records;
    }
    if (args[0].name){
      records = records.filter(item => item.hasOwnProperty('name') && new RegExp(args[0].name, 'gi').test(item.name));
    }
    if (args[0].genre){

      records = records.filter(item => item.hasOwnProperty('genre') && item.genre.includes(args[0].genre));
    }
    if (args[0].premiere){
      records = records.filter(item => item.hasOwnProperty('premiere') && new RegExp(args[0].premiere, 'gi').test(item.premiere));
    }
    return (records || []);
  }
}
