import {Component} from '@angular/core';

const demos: any = [
  { key: 'alert', ts: require('!!raw-loader!./demo/alert/alert.ts'), html: require('!!raw-loader!./demo/alert/alert.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/alert/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/alert/API.md') },
  { key: 'badges', ts: require('!!raw-loader!./demo/badges/badges.ts'), html: require('!!raw-loader!./demo/badges/badges.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/badges/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/badges/API.md') },
  { key: 'breadcrumbs', ts: require('!!raw-loader!./demo/breadcrumbs/breadcrumbs.ts'), html: require('!!raw-loader!./demo/breadcrumbs/breadcrumbs.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/breadcrumbs/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/breadcrumbs/API.md') },
  { key: 'buttons', ts: require('!!raw-loader!./demo/buttons/buttons.ts'), html: require('!!raw-loader!./demo/buttons/buttons.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/buttons/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/buttons/API.md') },
  { key: 'datatables', ts: require('!!raw-loader!./demo/datatables/datatables.ts'), html: require('!!raw-loader!./demo/datatables/datatables.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/datatables/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/datatables/API.md') },
  { key: 'datepickers', ts: require('!!raw-loader!./demo/datepickers/datepickers.ts'), html: require('!!raw-loader!./demo/datepickers/datepickers.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/datepickers/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/datepickers/API.md') },
  { key: 'dynamicicons', ts: require('!!raw-loader!./demo/dynamicicons/dynamicicons.ts'), html: require('!!raw-loader!./demo/dynamicicons/dynamicicons.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/dynamicicons/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/dynamicicons/API.md'), title: 'Dynamic Icons' },

  { key: 'forms', ts: require('!!raw-loader!./demo/forms/forms.ts'), html: require('!!raw-loader!./demo/forms/forms.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/forms/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/forms/API.md') },
  { key: 'icons', ts: require('!!raw-loader!./demo/icons/icons.ts'), html: require('!!raw-loader!./demo/icons/icons.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/icons/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/icons/API.md') },
  { key: 'images', ts: require('!!raw-loader!./demo/images/images.ts'), html: require('!!raw-loader!./demo/images/images.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/images/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/images/API.md') },
  { key: 'lookups', ts: require('!!raw-loader!./demo/lookups/lookups.ts'), html: require('!!raw-loader!./demo/lookups/lookups.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/lookups/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/lookups/API.md') },
  { key: 'menus', ts: require('!!raw-loader!./demo/menus/menus.ts'), html: require('!!raw-loader!./demo/menus/menus.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/menus/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/menus/API.md') },

  { key: 'modals', ts: require('!!raw-loader!./demo/modals/modals.ts'), html: require('!!raw-loader!./demo/modals/modals.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/modals/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/modals/API.md') },
  { key: 'paginations', ts: require('!!raw-loader!./demo/paginations/paginations.ts'), html: require('!!raw-loader!./demo/paginations/paginations.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/paginations/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/paginations/API.md') },
  { key: 'pick', ts: require('!!raw-loader!./demo/pick/pick.ts'), html: require('!!raw-loader!./demo/pick/pick.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/pick/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/pick/API.md') },
  { key: 'picklist', ts: require('!!raw-loader!./demo/picklist/picklist.ts'), html: require('!!raw-loader!./demo/picklist/picklist.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/picklist/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/picklist/API.md') },

  { key: 'pills', ts: require('!!raw-loader!./demo/pills/pills.ts'), html: require('!!raw-loader!./demo/pills/pills.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/pills/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/pills/API.md') },
  { key: 'popovers', ts: require('!!raw-loader!./demo/popovers/popovers.ts'), html: require('!!raw-loader!./demo/popovers/popovers.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/popovers/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/popovers/API.md') },
  { key: 'progressbar', ts: require('!!raw-loader!./demo/progressbar/progressbar.ts'), html: require('!!raw-loader!./demo/progressbar/progressbar.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/progressbar/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/progressbar/API.md') },
  { key: 'ratings', ts: require('!!raw-loader!./demo/ratings/ratings.ts'), html: require('!!raw-loader!./demo/ratings/ratings.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/ratings/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/ratings/API.md') },
  { key: 'sections', ts: require('!!raw-loader!./demo/sections/sections.ts'), html: require('!!raw-loader!./demo/sections/sections.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/sections/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/sections/API.md') },

  { key: 'spinners', ts: require('!!raw-loader!./demo/spinners/spinners.ts'), html: require('!!raw-loader!./demo/spinners/spinners.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/spinners/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/spinners/API.md') },
  { key: 'tabs', ts: require('!!raw-loader!./demo/tabs/tabs.ts'), html: require('!!raw-loader!./demo/tabs/tabs.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/tabs/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/tabs/API.md') },
  { key: 'toast', ts: require('!!raw-loader!./demo/toast/toast.ts'), html: require('!!raw-loader!./demo/toast/toast.html'), readme: require('html-loader?minimize=false!markdown-loader!./demo/toast/README.md'), api: require('html-loader?minimize=false!markdown-loader!./demo/toast/API.md') },
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
