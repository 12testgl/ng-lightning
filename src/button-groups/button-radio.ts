import { Directive, Input, HostListener, ElementRef, Renderer } from 'angular2/core';
import { Subscription } from 'rxjs/Subscription';
import { NglButtonGroup } from './button-group';

@Directive({
  selector: '[nglButtonRadio]',
})
export class NglButtonRadio {
  value: any;

  constructor(private element: ElementRef, private renderer: Renderer, public group: NglButtonGroup) { }

  @Input('nglButtonRadio') set _value(_value: any) {
    this.value = _value;
  }

  @Input() activeClass = 'slds-button--brand';

  private _subscription: Subscription;

  @HostListener('click', ['$event.target'])
  onSelectChange() {
    this.group.selectedChange.emit(this.value);
  }

  ngOnInit() {
    this._subscription = this.group.values.subscribe((_value) => {
      this.renderer.setElementClass(this.element.nativeElement, this.activeClass, this.value === _value);
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this.group.optionRemoved(this.value);
  }
}
