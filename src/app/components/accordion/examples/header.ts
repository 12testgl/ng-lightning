import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-accordion-header',
  templateUrl: './header.html',
})
export class DemoAccordionHeader {

  sections = [
    { name: 's1', header: { label: 'Header 1', icon: 'utility:agent_session' }, content: 'Content 1',  },
    { name: 's2', header: { label: 'Header 2',  icon: 'utility:classic_interface' }, content: 'Content 2' },
    { name: 's3', header: { label: 'Header 3',  icon: 'utility:einstein' }, content: 'Content 3' },
  ];

  active = 's1';

}
