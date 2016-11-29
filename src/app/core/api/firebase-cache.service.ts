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
  list(key: string, query?: FirebaseListFactoryOpts, indexOn?: string): Observable<[any]> {
    if (!(key in this.cache)) { this.setupList(key, query, indexOn); }
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
    this.localforage.getItem(key).subscribe(value => {
      if (!this.cache[key].loaded && value !== null) {
        this.cache[key].sub.next(value);
      }
    });
  }
  /**
   * 
   */
  private setupList(key: string, query: FirebaseListFactoryOpts = {}, indexOn?) {
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
        this.setList(key, value, indexOn);
      });
    // Local
    this.getList(key);
  }
  /**
   * 
   */
  private getList(key) {
    this.localforage.getItem(key).subscribe(listMap => {
      if (!this.cache[key].loaded && listMap !== null) {
        let promises = listMap.map(partialKey => {
          let itemKey = `${key}/${partialKey}`;
          return this.localforage.getItem(itemKey).toPromise();
        });
        Promise.all(promises).then(value => this.cache[key].sub.next(value));
      }
    });
  }
  /**
   * 
   */
  private setList(key, array, indexOn) {
    let listMap = array.reduce((p, c, i) => {
      let Objkey = c[indexOn];
      let storeKey = `${key}/${Objkey}`;
      this.localforage.setItem({key: storeKey, value: c});
      p[i] = Objkey;
      return p;
    }, []);
    this.localforage.setItem({key: key, value: listMap});
  }
}

export interface FirebaseCache {
  [propName: string]: {
    loaded: boolean;
    sub: ReplaySubject<any>;
  };
}
