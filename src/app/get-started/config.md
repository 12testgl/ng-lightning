import { NGL_ICON_CONFIG, NglIconConfig } from 'ng-ligthning';

@NgModule({
  providers: [
    ...,
    { provide: NGL_ICON_CONFIG, useValue: <NglIconConfig>{ svgPath: '/my/path' } },
  ],
})
