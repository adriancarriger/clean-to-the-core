/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimerService } from './timer.service';

describe('Service: Timer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerService]
    });
  });

  it('should ...', inject([TimerService], (service: TimerService) => {
    expect(service).toBeTruthy();
  }));
});
