import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import {HttpClientModule } from '@angular/common/http';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HYSSkillsComponent } from './componentes/h-y-s-skills/h-y-s-skills.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ArgProLogoComponent } from './componentes/arg-pro-logo/arg-pro-logo.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    HYSSkillsComponent,
    HeaderComponent,
    ArgProLogoComponent,
    RedesSocialesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
