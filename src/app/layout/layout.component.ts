import { Component } from '@angular/core';
import { routes } from '../components/routes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

  links = routes;

  getLabel(route) {
    const path = route.path;
    return path.charAt(0).toUpperCase() + path.slice(1);
  }

}
