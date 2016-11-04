/* tslint:disable:no-unused-variable */
import { async, inject, TestBed } from '@angular/core/testing';

import { GlobalEventsService } from './global-events.service';

describe('Service: GlobalEvents', () => {
  let myMockWindow: Window;
  beforeEach(() => {
    myMockWindow = <any> {location: <any> {hostname: '127.0.0.1'}};
    TestBed.configureTestingModule({
      providers: [
        GlobalEventsService,
        { provide: 'Window', useValue: window }
      ]
    });
  });

  beforeEach(async(() => {
    TestBed.compileComponents();
  }));

  it('should ...', inject([GlobalEventsService], (service: GlobalEventsService) => {
    expect(service).toBeTruthy();
  }));

  it('should call resize without error', inject([GlobalEventsService], (service: GlobalEventsService) => {
    service.resize();
    expect(service).toBeTruthy();
  }));

});
