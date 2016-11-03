import {Component} from '@angular/core';

const demos: any = [
  { key: 'badges', ts: require('!!raw!./demo/badges/badges.ts'), html: require('!!raw!./demo/badges/badges.html'), readme: require('./demo/badges/README.md'), api: require('./demo/badges/API.md') },
  { key: 'breadcrumbs', ts: require('!!raw!./demo/breadcrumbs/breadcrumbs.ts'), html: require('!!raw!./demo/breadcrumbs/breadcrumbs.html'), readme: require('./demo/breadcrumbs/README.md'), api: require('./demo/breadcrumbs/API.md') },
  { key: 'buttons', ts: require('!!raw!./demo/buttons/buttons.ts'), html: require('!!raw!./demo/buttons/buttons.html'), readme: require('./demo/buttons/README.md'), api: require('./demo/buttons/API.md') },
  { key: 'datatables', ts: require('!!raw!./demo/datatables/datatables.ts'), html: require('!!raw!./demo/datatables/datatables.html'), readme: require('./demo/datatables/README.md'), api: require('./demo/datatables/API.md') },
  { key: 'datepickers', ts: require('!!raw!./demo/datepickers/datepickers.ts'), html: require('!!raw!./demo/datepickers/datepickers.html'), readme: require('./demo/datepickers/README.md'), api: require('./demo/datepickers/API.md') },

  { key: 'forms', ts: require('!!raw!./demo/forms/forms.ts'), html: require('!!raw!./demo/forms/forms.html'), readme: require('./demo/forms/README.md'), api: require('./demo/forms/API.md') },
  { key: 'icons', ts: require('!!raw!./demo/icons/icons.ts'), html: require('!!raw!./demo/icons/icons.html'), readme: require('./demo/icons/README.md'), api: require('./demo/icons/API.md') },
  { key: 'images', ts: require('!!raw!./demo/images/images.ts'), html: require('!!raw!./demo/images/images.html'), readme: require('./demo/images/README.md'), api: require('./demo/images/API.md') },
  { key: 'lookups', ts: require('!!raw!./demo/lookups/lookups.ts'), html: require('!!raw!./demo/lookups/lookups.html'), readme: require('./demo/lookups/README.md'), api: require('./demo/lookups/API.md') },
  { key: 'menus', ts: require('!!raw!./demo/menus/menus.ts'), html: require('!!raw!./demo/menus/menus.html'), readme: require('./demo/menus/README.md'), api: require('./demo/menus/API.md') },

  { key: 'modals', ts: require('!!raw!./demo/modals/modals.ts'), html: require('!!raw!./demo/modals/modals.html'), readme: require('./demo/modals/README.md'), api: require('./demo/modals/API.md') },
  { key: 'notifications', ts: require('!!raw!./demo/notifications/notifications.ts'), html: require('!!raw!./demo/notifications/notifications.html'), readme: require('./demo/notifications/README.md'), api: require('./demo/notifications/API.md') },
  { key: 'paginations', ts: require('!!raw!./demo/paginations/paginations.ts'), html: require('!!raw!./demo/paginations/paginations.html'), readme: require('./demo/paginations/README.md'), api: require('./demo/paginations/API.md') },
  { key: 'pick', ts: require('!!raw!./demo/pick/pick.ts'), html: require('!!raw!./demo/pick/pick.html'), readme: require('./demo/pick/README.md'), api: require('./demo/pick/API.md') },
  { key: 'picklist', ts: require('!!raw!./demo/picklist/picklist.ts'), html: require('!!raw!./demo/picklist/picklist.html'), readme: require('./demo/picklist/README.md'), api: require('./demo/picklist/API.md') },

  { key: 'pills', ts: require('!!raw!./demo/pills/pills.ts'), html: require('!!raw!./demo/pills/pills.html'), readme: require('./demo/pills/README.md'), api: require('./demo/pills/API.md') },
  { key: 'popovers', ts: require('!!raw!./demo/popovers/popovers.ts'), html: require('!!raw!./demo/popovers/popovers.html'), readme: require('./demo/popovers/README.md'), api: require('./demo/popovers/API.md') },
  { key: 'ratings', ts: require('!!raw!./demo/ratings/ratings.ts'), html: require('!!raw!./demo/ratings/ratings.html'), readme: require('./demo/ratings/README.md'), api: require('./demo/ratings/API.md') },
  { key: 'sections', ts: require('!!raw!./demo/sections/sections.ts'), html: require('!!raw!./demo/sections/sections.html'), readme: require('./demo/sections/README.md'), api: require('./demo/sections/API.md') },
  { key: 'spinners', ts: require('!!raw!./demo/spinners/spinners.ts'), html: require('!!raw!./demo/spinners/spinners.html'), readme: require('./demo/spinners/README.md'), api: require('./demo/spinners/API.md') },

  { key: 'tabs', ts: require('!!raw!./demo/tabs/tabs.ts'), html: require('!!raw!./demo/tabs/tabs.html'), readme: require('./demo/tabs/README.md'), api: require('./demo/tabs/API.md') },
];

const components: any = {};
demos.forEach((demo: any) => {
  components[demo.key] = demo;
});

@Component({
  templateUrl: './demo.html',
})
export class DemoComponent {
  components = components;
}
