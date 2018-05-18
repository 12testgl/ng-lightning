import {Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'figure[nglFile]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './file.pug',
  host: {
    '[class.slds-file]': 'true',
    '[class.slds-file--card]': 'true',
  },
})
export class NglFile  {
  @Input('nglTitle') title: string = null;

  constructor(public element: ElementRef, public renderer: Renderer2) {  }
};
