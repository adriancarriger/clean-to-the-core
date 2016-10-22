import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

import { GlobalEventsService } from './global-events.service';

@Directive({
  selector: '[appWatchHeight]'
})
export class WatchHeightDirective implements OnInit {
  @Output() heightChange = new EventEmitter();

  constructor(
    private el: ElementRef,
    private events: GlobalEventsService) { }

  ngOnInit() {
    this.updateHeight();
    this.listenToResize();
  }

  private listenToResize() {
    this.events.resize().subscribe( () => {
      this.updateHeight();
    });
  }
  private updateHeight() {
    this.heightChange.emit( this.el.nativeElement.clientHeight );
  }
}
