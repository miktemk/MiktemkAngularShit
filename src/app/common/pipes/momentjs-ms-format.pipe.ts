import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentjsMsFormat'
})
export class MomentjsMsFormatPipe implements PipeTransform {

  // NOTE: transforms milliseconds to a formatted momentjs text
  transform(valueMs: number, format: string): string {
    if (typeof valueMs != 'number')
      return '';
    if (!format)
      format = 'HH:mm:ss.S';
    return moment.utc(valueMs).format(format);
  }

}


// NOTE: old code: minutePrettyPrint2
// @Pipe({
//   name: 'minutePrettyPrint2'
// })
// export class MomentjsMinutePrettyPrintPipe implements PipeTransform {
//   transform(valueMs: number): string {
//     if (typeof valueMs != 'number')
//       return '';
//     return moment.utc(valueMs).format('mm:ss.S');
//   }
// }
