import { NgModule } from '@angular/core';
import { Ng2StateDeclaration, UIRouter, UIRouterModule } from '@uirouter/angular';
import { Visualizer } from '@uirouter/visualizer';

import { Angular2KnobTestComponent } from './test-angular2-knob/angular2-knob-test.component';
import { TestCssGoodiesPageComponent } from './test-css-goodies-page/test-css-goodies-page.component';
import { TestMiscControlsPageComponent } from './test-misc-controls-page/test-misc-controls-page.component';
import { TestNg2ChartsComponent } from './test-ng2-charts/test-ng2-charts.component';
import { TestVisjsPageComponent } from './test-visjs-page/test-visjs-page.component';
import { TestCanvas1PageComponent } from './test-canvas1-page/test-canvas1-page.component';


const routes: Ng2StateDeclaration[] = [
  { name: 'test-angular2-knob', url: '/test-angular2-knob', component: Angular2KnobTestComponent },
  { name: 'test-ng2-charts', url: '/test-ng2-charts', component: TestNg2ChartsComponent },
  { name: 'test-misc-controls', url: '/test-misc-controls', component: TestMiscControlsPageComponent },
  { name: 'test-css-goodies', url: '/test-css-goodies', component: TestCssGoodiesPageComponent },
  { name: 'test-canvas1', url: '/test-canvas1', component: TestCanvas1PageComponent },
  { name: 'test-visjs', url: '/test-visjs', component: TestVisjsPageComponent },
];


export function uiRouterConfigFn(uiRouter: UIRouter) {
  const transitionService = uiRouter.transitionService;
  // requiresAuthHook(transitionService);
  // requiresWhitelistHook(transitionService);
  //googleAnalyticsHook(transitionService); // TODO: enable GoogleAnalytics when this project is done
  
  //uiRouter.trace.enable(Category.TRANSITION);
  //uiRouter.trace.enable(Category.RESOLVE);
  //uiRouter.plugin(Visualizer);
}


@NgModule({
  imports: [
    UIRouterModule.forRoot({
      states: routes,
      useHash: true,
      otherwise: { state: 'test-angular2-knob' },
      config: uiRouterConfigFn
    })
  ],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
