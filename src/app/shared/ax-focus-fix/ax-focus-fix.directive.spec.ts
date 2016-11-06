/* tslint:disable:no-unused-variable */
import { Component, HostBinding, Injectable, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs/Rx';

import { AxFocusFixDirective } from './ax-focus-fix.directive';
import { MockDocumentService } from '../../../mocks/mock-document.service.spec';
import { MockWindowService } from '../../../mocks/mock-window.service.spec';

@Component({
  template: `<div #testEl appAxFocus01Fix></div>`
})
export class ContainerComponent {
  @ViewChild('testEl') testEl;
}

describe('Directive: appAxFocus01Fix', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let mockDocumentService = new MockDocumentService();
  let mockWindowService = new MockWindowService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: 'Document', useValue: mockDocumentService },
        { provide: 'Window', useValue: mockWindowService }
      ],
      declarations: [AxFocusFixDirective, ContainerComponent]
    })
    .compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    mockWindowService.scrollTo(0, 15); // start with scroll
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should not set aria-hidden to false on a non-tab keydown', () => {
    let child = fixture.nativeElement.firstElementChild;
    expect( child.getAttribute('aria-hidden') ).toBe('true');
    mockDocumentService.newEvent('keydown', {keyCode: 4});
    fixture.detectChanges();
    expect( child.getAttribute('aria-hidden') ).toBe('true');
  });

  it('should set aria-hidden to false on a tab keydown', () => {
    let child = fixture.nativeElement.firstElementChild;
    expect( child.getAttribute('aria-hidden') ).toBe('true');
    mockDocumentService.newEvent('keydown', {keyCode: 9});
    fixture.detectChanges();
    expect( child.getAttribute('aria-hidden') ).toBe('false');
  });

  it('should not set aria-hidden to true on a non-tab keyup', () => {
    let child = fixture.nativeElement.firstElementChild;
    // Prepare test => set globals
    mockWindowService.scrollTo(5, 7);
    expect( mockWindowService.pageYOffset ).toBe(7);
    // Prepare test => tab keydown
    mockDocumentService.newEvent('keydown', {keyCode: 9});
    fixture.detectChanges();
    expect( child.getAttribute('aria-hidden') ).toBe('false');
    // Run test => non-tab keyup
    mockDocumentService.newEvent('keyup', {keyCode: 4});
    fixture.detectChanges();
    expect( child.getAttribute('aria-hidden') ).toBe('false');
    expect( mockWindowService.pageYOffset ).toBe(7);
  });

  it('should set aria-hidden to true on a tab keyup', () => {
    let child = fixture.nativeElement.firstElementChild;
    // Prepare test => tab keydown
    mockDocumentService.newEvent('keydown', {keyCode: 9});
    fixture.detectChanges();
    expect( child.getAttribute('aria-hidden') ).toBe('false');
    // Run test => tab keyup
    mockDocumentService.newEvent('keyup', {keyCode: 9});
    fixture.detectChanges();
    expect( child.getAttribute('aria-hidden') ).toBe('true');
  });

  it(`should set window offset to 0, and 
      not set aria-hidden to true on a tab  with focus`, () => {
    let child = fixture.nativeElement.firstElementChild;
    // Prepare test => set globals
    mockDocumentService.setActiveElement(child);
    mockWindowService.scrollTo(0, 7);
    expect( mockWindowService.pageYOffset ).toBe(7);
    // Prepare test => tab keydown
    mockDocumentService.newEvent('keydown', {keyCode: 9});
    fixture.detectChanges();
    expect( child.getAttribute('aria-hidden') ).toBe('false');
    // Run test => tab keyup
    mockDocumentService.newEvent('keyup', {keyCode: 9});
    fixture.detectChanges();
    expect( child.getAttribute('aria-hidden') ).toBe('false');
    expect( mockWindowService.pageYOffset ).toBe(0);
  });

  it('should set aria-hidden to true on scroll', () => {
    let child = fixture.nativeElement.firstElementChild;
    expect( child.getAttribute('aria-hidden') ).toBe('true');
    // Run test => tab keyup
    mockWindowService.scrollTo(0, 0);
    fixture.detectChanges();
    expect( child.getAttribute('aria-hidden') ).toBe('false');
  });

  it('should set aria-hidden to true on scroll', () => {
    let child = fixture.nativeElement.firstElementChild;
    // Prepare test => set scroll to 0
    mockWindowService.scrollTo(0, 0);
    fixture.detectChanges();
    expect( child.getAttribute('aria-hidden') ).toBe('false');
    // Run test
    mockWindowService.scrollTo(0, 228);
    fixture.detectChanges();
    expect( child.getAttribute('aria-hidden') ).toBe('true');
  });
});
