import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-icons-basic',
  templateUrl: './basic.html',
})
export class DemoIconsBasic {

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
