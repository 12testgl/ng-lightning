import { Component, ElementRef, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NglCommonNotify } from '../common/notify/notify';

@Component({
  selector: 'ngl-alert',
  templateUrl: './alert.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'nglAlert',
})
export class NglAlert extends NglCommonNotify {

  constructor(element: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef) {
    super(element, renderer, cd, 'alert');
  }

}
