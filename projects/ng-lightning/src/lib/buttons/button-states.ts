import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngl-state-on',
  templateUrl: './button-states.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglButtonStateOn {

  /**
   * LDS name of the icon.
   * Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.
   */
  @Input() iconName: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, this.getHostClass());
  }

  protected getHostClass() {
    return 'slds-text-selected';
  }
}

@Component({
  selector: 'ngl-state-off',
  templateUrl: './button-states.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglButtonStateOff extends NglButtonStateOn {
  protected getHostClass() {
    return 'slds-text-not-selected';
  }
}

@Component({
  selector: 'ngl-state-hover',
  templateUrl: './button-states.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglButtonStateHover extends NglButtonStateOn {
  protected getHostClass() {
    return 'slds-text-selected-focus';
  }
}
