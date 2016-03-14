import { Directive, Input, Output, EventEmitter, ElementRef, Renderer } from 'angular2/core';
import { BehaviorSubject } from 'rxjs/subject/BehaviorSubject';

@Directive({
  selector: '[nglButtonGroup]',
})
export class NglButtonGroup {

  @Output() selectedChange = new EventEmitter(false);

  @Input() set selected(_selected: string) {
    this._selected = _selected;
    this.values.next(this._selected);
  };

  get selected() {
    return this._selected;
  }

  values = new BehaviorSubject(null);
  private _selected: string;

  constructor(private element: ElementRef, private renderer: Renderer) { }

  ngAfterContentInit() {
    this.values.next(this._selected);
  }

  ngOnInit() {
    this.renderer.setElementClass(this.element.nativeElement, 'slds-button-group', true);
    this.renderer.setElementAttribute(this.element.nativeElement, 'role', 'group');
  }

  optionRemoved(value: any) {
    if (this.selected === value) {
      setTimeout(() => {
        this.selectedChange.emit(undefined);
      });
    }
  }
}
