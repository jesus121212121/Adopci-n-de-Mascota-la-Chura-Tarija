import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent} from './cabecera/cabecera.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CabeceraComponent,NavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demostracionCompetencia';
}
