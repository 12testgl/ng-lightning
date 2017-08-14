import {Directive, Input, TemplateRef, Output, EventEmitter, ContentChild} from '@angular/core';
import {NglTab} from './tab';

/*
 * <ngl-tab [heading="..."]>
 *    <ng-template ngl-tab-heading>...</ng-template>
 *    <ng-template ngl-tab-content>
 *       Content goes here...
 *    </ng-template>
 * </ngl-tab>
 */
@Directive({selector: '[ngl-tab-heading]'})
export class NglTabHeading {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: '[ngl-tab-content]'})
export class NglTabContent {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
  selector: 'ngl-tab',
  providers: [ {provide: NglTab, useExisting: NglTabVerbose} ],
})
export class NglTabVerbose extends NglTab {
  @Input('nglTabId') id: string;
  @Input() heading: string | TemplateRef<any>;
  @Output() onActivate = new EventEmitter<NglTab>();
  @Output() onDeactivate = new EventEmitter<NglTab>();

  @ContentChild(NglTabContent) contentTemplate: NglTabContent;
  @ContentChild(NglTabHeading) headingTemplate: NglTabHeading;

  ngAfterContentInit() {
    if (this.headingTemplate) {
      this.heading = this.headingTemplate.templateRef;
    }
    this.templateRef = this.contentTemplate.templateRef;
  }
}
