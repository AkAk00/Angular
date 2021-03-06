import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/pages/login/login.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },

  {
path: '',
redirectTo: '/login',
pathMatch: 'full'
  },
  {
    path: 'prestations',
  loadChildren: () => import('src/app/prestations/prestations.module').then(mod => mod.PrestationsModule),
  },
{
  path: 'clients',
  loadChildren: () => import('src/app/clients/clients.module').then(mod => mod.ClientsModule),
},

{
  path: '**',
  loadChildren: () => import('src/app/page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule),
},

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
      preloadingStrategy: PreloadAllModules
      } // <-- debugging purposes only
    )
  ]
})
export class RoutingModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
