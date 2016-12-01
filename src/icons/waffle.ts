import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'ngl-icon-waffle,[ngl-icon-waffle]',
  templateUrl: './waffle.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-icon-waffle_container]': 'true',
  },
})
export class NglIconWaffle {}
