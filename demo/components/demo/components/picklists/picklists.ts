import {Component} from 'angular2/core';
import {NGL_DIRECTIVES} from '../../../../../dist/ng-lightning';

@Component({
    selector: 'demo-picklists',
    directives: [NGL_DIRECTIVES],
    template: require('./picklists.html'),
})
export class DemoPicklists {
  open: boolean = true;
  items: any[] = null;
  set multiple(multiple: boolean) {
    this.items = null;
    this._multiple = multiple;
  }
  get multiple() {
    return this._multiple;
  }

  private _multiple: boolean = false;

  onSelect(item: any) {
    if (!this.multiple) {
      this.items = [ item.value ];
      return;
    }
    if (this.items) {
      this.items = this.items.filter(i => i !== item.value);
    }
    if (item.isSelected) {
      if (!this.items) {
        this.items = [];
      }
      this.items.push(item.value);
    }
  }
}
