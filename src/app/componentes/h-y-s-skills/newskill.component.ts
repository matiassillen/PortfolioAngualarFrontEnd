import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit{
  nombre: string;
  porcentaje: number;

 constructor(private skills: SkillService, private router: Router) { }

 ngOnInit(): void {

 }

 onCreate(): void {
  const skill = new Skill(this.nombre, this.porcentaje);
  this.skills.save(skill).subscribe(
    data => {
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Falló al añadir la skill");
      this.router.navigate(['']);
    }
  )
 }
}
