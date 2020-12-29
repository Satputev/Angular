import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'message'
})
export class MessagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return args[1] + ' ' + args[0] + ' ' + value;
  }

}
