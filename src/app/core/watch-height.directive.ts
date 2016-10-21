import { Directive, ElementRef, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Directive({
  selector: '[appWatchHeight]'
})
export class WatchHeightDirective implements OnInit {
  @Output() heightChange = new EventEmitter();

  constructor(
    private el: ElementRef,
    @Inject('Window') window: Window) { }

  ngOnInit() {
    this.updateHeight();
    this.listenToResize();
  }

  private updateHeight() {
    this.heightChange.emit( this.el.nativeElement.clientHeight );
  }

  private listenToResize() {
    Observable.fromEvent(window, 'resize')
      .throttleTime( 300 )
      .subscribe( () => this.updateHeight() );
  }

}
