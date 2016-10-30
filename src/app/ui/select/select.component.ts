/**
 * @module UiModule
 */ /** */
import {
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
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  /**
   * Category (pural) for the type of options (e.g. Restaurants, animals, cities, etc.)
   * @default all is used as a default like this: `All ${category}`
   */
  @Input() category: string;
  /**
   * Options given in select box
   */
  @Input() options: Array<string>;
  /**
   * attr.aria-label (optional)
   */
  @Input() label: string;
  /**
   * attr.title (optional)
   */
  @Input() title: string;
  /**
   * `background-color` from the `input` element when not focused.
   */
  @Input() color: string;
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
   * Sets the `input` value. 
   */
  set(newValue: string) {
    this.input.nativeElement.value = newValue;
  }
}
