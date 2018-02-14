import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentjsDurationFormat'
})
export class MomentjsDurationFormatPipe implements PipeTransform {

  transform(duration: moment.Duration, format: string): string {
    if (!duration || !duration.asMilliseconds)
      return '';
    if (!format)
      format = 'HH:mm';
    return moment.utc(duration.asMilliseconds()).format(format);
  }

}
