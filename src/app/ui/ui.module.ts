import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoderbaseUiModule} from '@coderbase/ui';
import { UiComponent } from './containers/ui/ui.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [UiComponent, NavComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    CoderbaseUiModule
  ],
  exports: [UiComponent]
})
export class UiModule { }
