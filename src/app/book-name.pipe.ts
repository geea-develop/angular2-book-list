import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookName'
})
export class BookNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // convert all characters to lower
    var lower = value.toLowerCase();

    // replace special characters
    var regEx = lower.replace(/[^A-Za-z0-9 .]/g, "");

    return regEx.replace(/(^| )(\w)/g, function (x) {
        // make first letter of each word uppercase
        return x.toUpperCase();
      });

  }

}
