import {Injectable, EventEmitter} from 'angular2/core';

@Injectable()
export class NglPageClickService {
  private clickEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    document.querySelector('html').addEventListener('click', (event: any) => this.clickEmitter.next(event), true);
  }

  subscribe(callback: (_: any) => void, filter: (_: any) => boolean) {
    return this.clickEmitter.subscribe((_: any) => {
      if (typeof(filter) === 'function' && !filter(_)) {
        return;
      }
      callback(_);
    });
  }
}
