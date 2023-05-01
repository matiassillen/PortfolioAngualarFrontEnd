import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HYSSkillsComponent } from './componentes/h-y-s-skills/h-y-s-skills.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ArgProLogoComponent } from './componentes/arg-pro-logo/arg-pro-logo.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { LoginComponent } from './componentes/login/login.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    HYSSkillsComponent,
    HeaderComponent,
    ArgProLogoComponent,
    RedesSocialesComponent,
    LoginComponent,
    BannerComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
