import { Injectable } from '@angular/core';

@Injectable()
export class FilterUtilitiesService {
  /**
   * Coverts the input to camel case.
   * http://stackoverflow.com/a/2970667/5357459
   */
  camelize(input: string): string {
    return input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) { return ''; }
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
}
