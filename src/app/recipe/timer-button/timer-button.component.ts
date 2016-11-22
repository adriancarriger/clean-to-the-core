import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { TimerService } from '../../core/timer/timer.service';

@Component({
  selector: 'app-timer-button',
  templateUrl: './timer-button.component.html',
  styleUrls: ['./timer-button.component.scss']
})
export class TimerButtonComponent implements OnChanges, OnInit {
  /**
   * 
   */
  @Input() timerObj;
  @Input() title: string;
  @Input() id: string;
  @Input() slug: string;
  time: string;
  showButton: boolean;
  constructor(
    public timerService: TimerService) { }
  ngOnChanges() {
    this.updateTime();
  }
  ngOnInit() {
    this.updateTime();
  }
  private updateTime() {
    let temp;
    if (this.timerObj.exactly) {
      temp = this.timerObj.exactly;
    } else {
      temp = this.timerObj.short + '-' + this.timerObj.long;
    }
    temp += ' minute';
    if (this.timerObj.exactly !== '1') { temp += 's'; }
    this.time = temp;
  }
}
