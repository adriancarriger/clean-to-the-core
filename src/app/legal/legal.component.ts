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
  type: string;
  projectUrl = 'https://adriancarriger.github.io/clean-to-the-core/';
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.type = this.activatedRoute.snapshot.url[0].path;
  }
}
