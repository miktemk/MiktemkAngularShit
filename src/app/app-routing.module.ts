import { NgModule } from '@angular/core';
import { UIRouterModule, Ng2StateDeclaration, UIRouter, Category, Transition, TargetState } from "@uirouter/angular";
import { Visualizer } from '@uirouter/visualizer';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

const routes: Ng2StateDeclaration[] = [
  { name: 'test1', url: '/test1', component: Test1Component },
  { name: 'test2', url: '/test2', component: Test2Component },
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
      otherwise: { state: 'test1' },
      config: uiRouterConfigFn
    })
  ],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
