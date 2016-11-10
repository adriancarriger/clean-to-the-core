/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';

import { MockFilterData } from './mock-filter-data.spec';
import { SortPipe } from './sort.pipe';

describe('Pipe: Sort', () => {
  let pipe: SortPipe;
  let data;
  beforeEach(() => {
    pipe = new SortPipe();
    data = MockFilterData;
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort by number', () => {
    let ids = pipe.transform(data, 'stamp').map(item => item.id);
    expect(ids).toEqual([2, 1, 3]);
  });

  it('should reverse the number sort', () => {
    let ids = pipe.transform(data, 'stamp', 'number', false).map(item => item.id);
    expect(ids).toEqual([3, 1, 2]);
  });

  it('should sort by string', () => {
    let ids = pipe.transform(data, 'name', 'string').map(item => item.id);
    expect(ids).toEqual([1, 2, 3]);
  });

  it('should reverse the string sort', () => {
    let ids = pipe.transform(data, 'name', 'string', false).map(item => item.id);
    expect(ids).toEqual([3, 2, 1]);
  });

  it('should sort by date', () => {
    let ids = pipe.transform(data, 'date', 'date').map(item => item.id);
    expect(ids).toEqual([3, 2, 1]);
  });

  it('should return if data is undefined', () => {
    let output = pipe.transform(undefined, 'date');
    expect(output).toBe(undefined);
  });
});
