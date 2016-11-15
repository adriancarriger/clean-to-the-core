/**
 * @module AboutModule
 */ /** */
import { Component } from '@angular/core';

import { ApiService } from '../core/api/api.service';
/**
 * @whatItDoes Returns the {@link AboutComponent} view.
 * @consumers {@link AboutModule},  {@link AboutRoutingModule}
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private apiService: ApiService) { }
}
