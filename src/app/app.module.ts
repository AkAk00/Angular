import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from './ui/ui.module';
import { LoginModule } from './login/login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoutingModule } from './routing.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RoutingModule,
    UiModule,
    LoginModule,
    FontAwesomeModule
    ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
