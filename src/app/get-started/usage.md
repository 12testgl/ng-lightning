import {AppComponent} from '...';
import {NglModule} from 'ng-lightning';

@NgModule({
  imports: [..., NglModule.forRoot()],
  declarations: [AppComponent, ...],
  bootstrap: [AppComponent],
})
export class AppModule {}
