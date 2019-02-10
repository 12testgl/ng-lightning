import { Component, ElementRef, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NglCommonNotify } from '../common/notify/notify';

@Component({
  selector: 'ngl-toast',
  templateUrl: './toast.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'nglToast',
})
export class NglToast extends NglCommonNotify {

  constructor(element: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef) {
    super(element, renderer, cd, 'toast');
  }

}
