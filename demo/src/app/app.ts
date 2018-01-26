import {Component} from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app',
  templateUrl: './app.html',
})
export class AppComp {

  now = environment.now;

  version = environment.version;
}
