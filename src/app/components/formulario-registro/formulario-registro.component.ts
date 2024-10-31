import { Component } from '@angular/core';
import { Persona } from '../../models/persona.dto';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
addPerson() {
throw new Error('Method not implemented.');
}

  persona = new Persona('', '', '', '', '', '', '', '');
  comoConociste = ['Google', 'Amigo', 'Profesor', 'Otro'];
  genero = ['Hombre', 'Mujer'];
  submitted = false;
}
