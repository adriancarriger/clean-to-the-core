/**
 * @module LegalModule
 */ /** */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/**
 * @whatItDoes Returns the {@link LegalComponent} view that provides basic legal information
 * such as terms of use, privacy policy, etc.
 * @consumers {@link LegalModule},  {@link LegalRoutingModule}
 */
@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {
  /**
   * The deploy url of this project.
   */
  projectUrl = 'https://adriancarriger.github.io/clean-to-the-core/';
  /**
   * Tells the template which legal material to serve: either 'terms' or 'privacy'.
   */
  type: string;
  /**
   * Creates the {@link LegalComponent}.
   * @param activatedRoute used to get the current type
   */
  constructor(
    private activatedRoute: ActivatedRoute) { }
  /**
   * Gets the current type on component creation.
   */
  ngOnInit() {
    this.type = this.activatedRoute.snapshot.url[0].path;
  }
}
