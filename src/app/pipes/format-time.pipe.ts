import { Pipe, PipeTransform } from '@angular/core';
import { FormatTime } from 'src/utils/formatTime';

@Pipe({
  name: 'formatTime',
  pure: true
})
export class FormatTimePipe implements PipeTransform {

  // transform time from ms into a specific format
  transform(time: number, format?: string): string | number {
    return FormatTime(time, format);
  }

}
