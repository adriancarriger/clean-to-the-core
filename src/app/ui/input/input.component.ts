/**
 * @module UiModule
 */ /** */
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild } from '@angular/core';
/**
 * @whatItDoes Returns a simple ui component as defined in the {@link UiModule}.
 */
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit {
  /**
   * Accepts any input type, defaults to `text`.
   */
  @Input() type = 'text';
  /**
   * `background-color` from the `input` element when not focused.
   */
  @Input() color: string;
  /**
   * Allows custom options (e.g. search input styling)
   */
  @Input() special: string;
  /**
   * attr.aria-label (optional)
   */
  @Input() label: string;
  /**
   * Emits all changes via `update`.
   */
  @Output() update = new EventEmitter();
  /**
   * A reference to the `input` element.
   */
  @ViewChild('input') private input: ElementRef;
  /**
   * Gets the input value.
   * @returns returns the current value of the `input`.
   */
  get(): string {
    return this.input.nativeElement.value;
  }
  /**
   * Emits the inital value.
   */
  ngAfterViewInit() {
    let initValue = this.get();
    this.update.emit(initValue);
  }
  /**
   * Sets the `input` value. 
   */
  set(newValue: string) {
    this.input.nativeElement.value = newValue;
  }
}
