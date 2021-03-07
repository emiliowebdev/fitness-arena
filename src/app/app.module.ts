import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EquipmentComponent } from './equipment/equipment.component';

@NgModule({
  declarations: [
  EquipmentComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EquipmentComponent]
})
export class AppModule { }
