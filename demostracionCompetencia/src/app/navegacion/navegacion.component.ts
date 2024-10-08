import { Component } from '@angular/core';
//importar los tabs
import {MatTabsModule} from '@angular/material/tabs';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
//import { AlertasComponent } from '../alertas/alertas.component';
import { MatButtonModule } from '@angular/material/button';
import { FormularioComponent } from '../formulario/formulario.component';
import { PantallaInicioComponent } from '../pantalla-inicio/pantalla-inicio.component';
import { PruebaBotonComponent } from '../prueba-boton/prueba-boton.component';
import { VoluntariosComponent } from '../voluntarios/voluntarios.component';
import { SobrenosotrosComponent } from '../sobrenosotros/sobrenosotros.component';
import { ContactosComponent } from '../contactos/contactos.component';
import { AdopcionesComponent } from '../adopciones/adopciones.component';
@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    MatTabsModule,
    TarjetasComponent,
    //AlertasComponent,
    MatButtonModule,
    FormularioComponent,
    PantallaInicioComponent,
    PruebaBotonComponent,
    VoluntariosComponent,
    SobrenosotrosComponent,
    ContactosComponent,
    AdopcionesComponent

  ],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

}