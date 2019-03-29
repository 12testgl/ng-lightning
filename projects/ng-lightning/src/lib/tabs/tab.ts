import { Directive, Input, TemplateRef, Output, EventEmitter, Optional } from '@angular/core';
import { uniqueId } from '../util/util';

/*
 * <ng-template ngl-tab label="...">
 *    Content goes here...
 * </ng-template>
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngl-tab]',
  exportAs: 'nglTab',
})
export class NglTab {
  @Input() id: string;
  @Input() label: string | TemplateRef<any>;
  @Output() activate = new EventEmitter<NglTab>();
  @Output() deactivate = new EventEmitter<NglTab>();

  uid = uniqueId('tab');

  private _active = false;

  constructor(@Optional() public templateRef: TemplateRef<any>) {}

  set active(active: boolean) {
    if (active ===  this._active) { return; }
    this._active = active;
    if (active) {
      this.activate.emit(this);
    } else {
      this.deactivate.emit(this);
    }
  }

  get active(): boolean {
    return this._active;
  }
}
