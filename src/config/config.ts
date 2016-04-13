import {provide, Provider} from 'angular2/core';

export class NglConfig {
    svgPath: string = 'assets/icons/utility-sprite/svg';
};

let defaultConfig = new NglConfig();

export function provideNglConfig(config: any = <NglConfig>{}): Provider[] {
  return [ provide(NglConfig, {useValue: Object.assign(defaultConfig, config || {})}) ];
}
