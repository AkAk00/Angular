import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestationsComponent } from './pages/prestations/prestations.component';


const appRoutes: Routes = [
  {path: '', component: PrestationsComponent} // le deuxieme path "prestations"
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }

// excerice: créer  le module ClientRouting, ajouter une route sur
// RoutingModule pour charger le Module Clients en Lazy loading
// Ajouter une route pour demander au router d'instancier ClientsComponent sur ClientsRoutingModule
// Importez ClientsRoutingModule sur ClientsModule
// Relancez un ng serve
