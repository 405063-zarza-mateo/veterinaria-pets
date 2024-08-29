import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VeterinariaComponent } from './veterinaria/veterinaria.component';
import { MascotasComponent } from './mascotas/mascotas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VeterinariaComponent, MascotasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veterinaria-pets';
}
