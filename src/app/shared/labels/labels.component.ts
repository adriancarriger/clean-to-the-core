/**
 * @module SharedModule
 */ /** */
import { Component, Input } from '@angular/core';
/**
 * @whatItDoes Creates up to 6 labels with a circular design.
 * @consumers {@link HomeModule}
 */
@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent {
  /**
   * An input array of with the color and name for each label element.
   */
  @Input() labels: Array<Label>;
}
/**
 * `Label`s require both a name and background-color
 */
export interface Label {
  name: String;
  color: String;
}
