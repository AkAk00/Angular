import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListClientComponent } from './containers/list-client/list-client.component';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { PageClientAddComponent } from './pages/page-client-add/page-client-add.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { FormClientComponent } from './components/form-client/form-client.component';


@NgModule({
  declarations: [ClientsComponent, ListClientComponent, ItemClientComponent, PageClientAddComponent, AddClientComponent, FormClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
