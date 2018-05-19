import {Component} from '@angular/core';

@Component({
  selector: 'demo-icons',
  templateUrl: './icons.html',
})
export class DemoIcons {

  icons: any[] = [
    { iconName: 'announcement', variant: 'default' },
    { iconName: 'standard:case_comment', size: 'large' },
    { iconName: 'custom:custom2', size: 'large' },
  ];

  icon = this.icons[0];

  change() {
    this.icon = this.icons[(this.icons.indexOf(this.icon) + 1) % this.icons.length];
  }
}
