import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NewskillComponent } from './componentes/h-y-s-skills/newskill.component';
import { EditskillComponent } from './componentes/h-y-s-skills/editskill.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'newskill', component: NewskillComponent},
  {path: 'editskill/:id', component: EditskillComponent},
  {path: 'newproyecto', component: NewProyectoComponent},
  {path: 'editproyecto/:id', component: EditProyectoComponent},
  {path: 'editacercade/:id', component: EditAcercaDeComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
