import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent {

  constructor(private router:Router) {}

  ngOninit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }

}
