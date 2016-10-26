/**
 * @module AboutModule
 */ /** */
import { Component } from '@angular/core';
/**
 * @whatItDoes Returns the {@link AboutComponent} view.
 * @consumers {@link AboutModule},  {@link AboutRoutingModule}
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent { }
