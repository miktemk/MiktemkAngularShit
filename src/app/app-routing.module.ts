import { NgModule } from '@angular/core';
import { UIRouterModule, Ng2StateDeclaration, UIRouter, Category, Transition, TargetState } from "@uirouter/angular";
import { Visualizer } from '@uirouter/visualizer';
import { Angular2KnobTestComponent } from 'app/test-angular2-knob/angular2-knob-test.component';
import { TestNg2ChartsComponent } from 'app/test-ng2-charts/test-ng2-charts.component';


const routes: Ng2StateDeclaration[] = [
  { name: 'test-angular2-knob', url: '/test-angular2-knob', component: Angular2KnobTestComponent },
  { name: 'test-ng2-charts', url: '/test-ng2-charts', component: TestNg2ChartsComponent },
];


export function uiRouterConfigFn(uiRouter: UIRouter) {
  const transitionService = uiRouter.transitionService;
  // requiresAuthHook(transitionService);
  // requiresWhitelistHook(transitionService);
  //googleAnalyticsHook(transitionService); // TODO: enable GoogleAnalytics when this project is done
  
  //uiRouter.trace.enable(Category.TRANSITION);
  //uiRouter.trace.enable(Category.RESOLVE);
  uiRouter.plugin(Visualizer);
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
