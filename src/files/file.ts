import {Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, ContentChild } from '@angular/core';
import {NglFileActionsTemplate} from './templates';

@Component({
  selector: 'ngl-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './file.pug',
  host: {
    '[class.slds-file]': 'true',
    '[class.slds-file_card]': 'true',
  },
})
export class NglFile {
  @Input() title: string = null;
  @Input() icon: string = null;
  @Input() overlay: string = null;

  @ContentChild(NglFileActionsTemplate) actions: NglFileActionsTemplate;

  constructor(public element: ElementRef, public renderer: Renderer2) { }

  fileClasses() {
    const classes = ['slds-file__title'];

    if (this.overlay) {
      classes.push(...['slds-file__title_overlay', 'slds-align_absolute-center', 'slds-text-heading_large']);
    } else {
      classes.push('slds-file__title_card');
    }

    return classes;
  }
}
