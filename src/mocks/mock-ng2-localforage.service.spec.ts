import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class MockNg2LocalforageService {
  item;
  constructor() {
    this.onInit();
  }
  onInit() {
  }
  getItem(input) {
    this.item = new ReplaySubject();
    return this.item.asObservable();
  }
  setItem(input) {

  }
  update(updateInput) {
    this.item.next(updateInput);
  }
}
