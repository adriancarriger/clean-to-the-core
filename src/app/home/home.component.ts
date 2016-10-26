/**
 * @module HomeModule
 */ /** */
import { Component } from '@angular/core';
/**
 * @whatItDoes Returns the {@link HomeComponent} view.
 * @consumers {@link HomeModule},  {@link HomeRoutingModule}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
