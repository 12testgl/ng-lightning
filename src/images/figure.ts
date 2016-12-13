import {Component, Input, ChangeDetectionStrategy, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'ngl-figure',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './figure.pug',
})

export class NglFigure  {
  @Input() title: string = '';

  constructor(public element: ElementRef, public renderer: Renderer) {  }
};
