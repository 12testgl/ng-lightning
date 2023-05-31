import { Directive, TemplateRef, ContentChild, AfterContentInit } from '@angular/core';
import { NglTab } from './tab';

/*
 * <ngl-tab [label="..."]>
 *    <ng-template ngl-tab-label>...</ng-template>
 *    <ng-template ngl-tab-content>
 *       Content goes here...
 *    </ng-template>
 * </ngl-tab>
 */
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({selector: '[ngl-tab-label]'})
export class NglTabLabel {
  constructor(public templateRef: TemplateRef<any>) {}
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({selector: '[ngl-tab-content]'})
export class NglTabContent {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ngl-tab',
  providers: [ {provide: NglTab, useExisting: NglTabVerbose} ],
})
export class NglTabVerbose extends NglTab implements AfterContentInit {

  @ContentChild(NglTabContent) contentTemplate: NglTabContent;
  @ContentChild(NglTabLabel) labelTemplate: NglTabLabel;

  ngAfterContentInit() {
    if (this.labelTemplate) {
      this.label = this.labelTemplate.templateRef;
    }
    this.templateRef = this.contentTemplate.templateRef;
  }
}
