import { Component, Input } from '@angular/core';

import { TimerService } from '../../core/timer/timer.service';

@Component({
  selector: 'app-timer-button',
  templateUrl: './timer-button.component.html',
  styleUrls: ['./timer-button.component.scss']
})
export class TimerButtonComponent {
  /**
   * 
   */
  @Input() timerObj;
  constructor(
    public timerService: TimerService) { }
}
