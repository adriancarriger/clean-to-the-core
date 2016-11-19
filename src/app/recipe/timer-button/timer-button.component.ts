import { Component, Input } from '@angular/core';

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
}
