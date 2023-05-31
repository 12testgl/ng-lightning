import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  templateUrl: './intro.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent {
  @HostBinding('class.intro') introClass = true;
}
