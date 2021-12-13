import {
  Directive,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[nglDropdownItem]',
  host: {
    tabindex: '0',
  },
})
export class NglDropdownItem implements OnInit, OnDestroy {
  private isFocused = false;

  private destroy$ = new Subject<void>();

  constructor(
    private element: ElementRef<HTMLElement>,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.element.nativeElement, 'focus')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.isFocused = true;
        });

      fromEvent(this.element.nativeElement, 'blur')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.isFocused = false;
        });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  hasFocus() {
    return this.isFocused;
  }

  focus() {
    this.element.nativeElement.focus();
  }
}
