import { Component } from '@angular/core';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent {
nombre : string = '';
raza : string = '';
sexo : string = '';
ano_nacimiento : number = 0;
tutor : string = '';
}
