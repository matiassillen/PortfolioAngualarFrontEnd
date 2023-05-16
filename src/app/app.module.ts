import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './componentes/home/home.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { EditskillComponent } from './componentes/h-y-s-skills/editskill.component';
import { NewskillComponent } from './componentes/h-y-s-skills/newskill.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';



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
    FooterComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditskillComponent,
    NewskillComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    EditAcercaDeComponent,

  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
