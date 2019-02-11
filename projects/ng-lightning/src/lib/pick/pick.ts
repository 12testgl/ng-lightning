import { Directive, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InputBoolean } from '../util/convert';

@Directive({
  selector: '[nglPick]',
})
export class NglPick implements AfterContentInit {

  selected: any;
  values = new BehaviorSubject(null);

  @Input('nglPick') set setSelected(selected: string) {
    this.selected = selected;
    this.ngAfterContentInit();
  }

  @Input() nglPickActiveClass: string;

  @Output() nglPickChange = new EventEmitter();
  @Output() nglOptionDestroyed = new EventEmitter();

  @Input('nglPickMultiple') @InputBoolean() isMultiple = false;

  ngAfterContentInit() {
    this.values.next(this.selected);
  }

  selectOption(value: any) {
    let next: any;
    if (this.isMultiple) {
      if (Array.isArray(this.selected)) {
        // Remove if already there or add to selection
        const index = this.selected.indexOf(value);
        next = index > -1
                ? [...this.selected.slice(0, index), ...this.selected.slice(index + 1)]
                : [...this.selected, value];
      } else {
        next = Object.assign({}, this.selected, {[value]: !this.selected[value]});
      }
    } else {
      next = value;
    }

    this.nglPickChange.emit(next);
  }

  optionRemoved(value: any) {
    if (this.isMultiple && !this.selected) {
      return;
    }

    let emit: boolean;

    if (this.isMultiple) {
      emit = Array.isArray(this.selected) ? this.selected.indexOf(value) > -1 : !!this.selected[value];
    } else {
      emit = this.selected === value;
    }

    if (emit) {
      setTimeout(() => this.nglOptionDestroyed.emit(value));
    }
  }
}
