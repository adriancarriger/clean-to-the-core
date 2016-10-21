/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WatchHeightDirective } from './watch-height.directive';

describe('Directive: WatchHeight', () => {
  let directive;
  let el;
  let window: Window;
  beforeEach( () => {
    el = {
      nativeElement: {
        clientHeight: 1234
      }
    };
    directive = new WatchHeightDirective(el, window);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should emit the inital height', done => {
    directive.heightChange.subscribe(data => {
      expect(data).toBe(1234);
      done();
    });
    directive.ngOnInit();
  });
});
