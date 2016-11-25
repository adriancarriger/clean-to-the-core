/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { LimitToPipe } from './limit-to.pipe';

describe('LimitToPipe', () => {
  it('create an instance', () => {
    let pipe = new LimitToPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return a shorter array', () => {
    let pipe = new LimitToPipe();
    let testArray = ['one', 'two', 'three', 'four'];
    let result = pipe.transform(testArray, 3);
    expect(result).toEqual(['one', 'two', 'three']);
    result = pipe.transform(testArray, 1);
    expect(result).toEqual(['one']);
  });
});
