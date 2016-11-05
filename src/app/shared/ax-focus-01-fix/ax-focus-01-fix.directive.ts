import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

import { GlobalEventsService } from '../../core/global-events/global-events.service';

@Directive({
  selector: '[appAxFocus01Fix]'
})
export class AxFocus01FixDirective implements OnInit {
  /**
   * 
   */
  @HostBinding('attr.aria-hidden') ariaHidden = true;
  /**
   * 
   */
  constructor(
    private el: ElementRef,
    private globalEventsService: GlobalEventsService) { }
  /**
   * Setup listeners
   */
  ngOnInit() {
    document.addEventListener('keydown', e => this.onKeyDown(e));
    document.addEventListener('keyup', e => this.onKeyUp(e));
    this.globalEventsService.scroll().subscribe(e => this.onScroll(e));
  }
  /**
   * Set all elements with this directive to visible by screen readers.
   */
  private onKeyDown(e) {
    if (e.keyCode === 9) {
      this.ariaHidden = false;
    }
  }
  /**
   * 
   * **If focused:** scroll document to top (no error message for invisible elements)
   * **Otherwise:** 
   */
  private onKeyUp(e) {
    if (e.keyCode === 9) {
      if (this.el.nativeElement === document.activeElement) {
        window.scrollTo(0, 0);
      } else {
        this.ariaHidden = true;
      }
    }
  }
  /**
   * 
   */
  private onScroll(event) {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition === 0) {
      this.ariaHidden = true;
    } else {
      this.ariaHidden = true;
    }
  }
}
