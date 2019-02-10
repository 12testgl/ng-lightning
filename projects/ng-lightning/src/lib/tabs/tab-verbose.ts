import { Directive, Input, TemplateRef, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import { NglTab } from './tab';

/*
 * <ngl-tab [label="..."]>
 *    <ng-template ngl-tab-label>...</ng-template>
 *    <ng-template ngl-tab-content>
 *       Content goes here...
 *    </ng-template>
 * </ngl-tab>
 */
// tslint:disable-next-line:directive-selector
@Directive({selector: '[ngl-tab-label]'})
export class NglTabLabel {
  constructor(public templateRef: TemplateRef<any>) {}
}

// tslint:disable-next-line:directive-selector
@Directive({selector: '[ngl-tab-content]'})
export class NglTabContent {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ngl-tab',
  providers: [ {provide: NglTab, useExisting: NglTabVerbose} ],
})
export class NglTabVerbose extends NglTab implements AfterContentInit {
  @Input() id: string;
  @Input() label: string | TemplateRef<any>;
  @Output() activate = new EventEmitter<NglTab>();
  @Output() deactivate = new EventEmitter<NglTab>();

  @ContentChild(NglTabContent) contentTemplate: NglTabContent;
  @ContentChild(NglTabLabel) labelTemplate: NglTabLabel;

  ngAfterContentInit() {
    if (this.labelTemplate) {
      this.label = this.labelTemplate.templateRef;
    }
    this.templateRef = this.contentTemplate.templateRef;
  }
}
