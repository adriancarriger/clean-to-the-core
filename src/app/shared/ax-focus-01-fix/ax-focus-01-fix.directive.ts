import { Directive, ElementRef, HostBinding, Inject, OnInit } from '@angular/core';

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
    @Inject('Document') private document: Document,
    private el: ElementRef,
    @Inject('Window') private window: Window
    ) { }
  /**
   * - Setup listeners
   * - Detect initial scroll position
   */
  ngOnInit() {
    this.document.addEventListener('keydown', e => this.onKeyDown(e));
    this.document.addEventListener('keyup', e => this.onKeyUp(e));
    this.window.addEventListener('scroll', () => this.onScroll());
    this.onScroll();
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
      if (this.el.nativeElement === this.document.activeElement) {
        this.window.scrollTo(0, 0);
      } else {
        this.ariaHidden = true;
      }
    }
  }
  /**
   * 
   */
  private onScroll() {
    let scrollPosition = this.window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition === 0) {
      this.ariaHidden = false;
    } else {
      this.ariaHidden = true;
    }
  }
}
