import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FirebaseListFactoryOpts, FirebaseObjectFactoryOpts } from 'angularfire2/interfaces';
import { ReplaySubject, Observable } from 'rxjs';
import { LocalForageService } from 'ng2-localforage';

@Injectable()
export class FirebaseCacheService {
  cache: FirebaseCache = {};
  constructor(
    private af: AngularFire,
    private localforage: LocalForageService) { }
  /**
   * 
   */
  list(key: string, query?: FirebaseListFactoryOpts) {
    if (!(key in this.cache)) { this.setupList(key, query); }
    return this.cache[key].sub.asObservable();
  }
  /**
   * 
   */
  object(key: string, query?: FirebaseObjectFactoryOpts): Observable<{}> {
    if (!(key in this.cache)) { this.setupObject(key, query); }
    return this.cache[key].sub.asObservable();
  }
  /**
   * 
   */
  private setupObject(key: string, query: FirebaseObjectFactoryOpts = {}) {
    // Create cache
    this.cache[key] = {
      loaded: false,
      sub: new ReplaySubject()
    };
    // Firebase
    query.preserveSnapshot = true;
    this.af.database.object(key, query)
      .map(obj => obj.val())
      .subscribe(value => {
        this.cache[key].loaded = true;
        this.cache[key].sub.next(value);
        this.localforage.setItem({key: key, value: value});
      });
    // Local
    this.getLocal(key);
  }
  /**
   * 
   */
  private setupList(key: string, query: FirebaseListFactoryOpts = {}) {
    // Create cache
    this.cache[key] = {
      loaded: false,
      sub: new ReplaySubject()
    };
    // Firebase
    query.preserveSnapshot = true;
    this.af.database.list(key, query)
      .map(arr => arr.map(snap => snap.val()))
      .subscribe(value => {
        this.cache[key].loaded = true;
        this.cache[key].sub.next(value);
        this.localforage.setItem({key: key, value: value});
      });
    // Local
    this.getLocal(key);
  }
  /**
   * 
   */
  private getLocal(key) {
    this.localforage.getItem(key).subscribe(value => {
      if (!this.cache[key].loaded && value !== null) {
        this.cache[key].sub.next(value);
      }
    });
  }
}

export interface FirebaseCache {
  [propName: string]: {
    loaded: boolean;
    sub: ReplaySubject<any>;
  };
}
