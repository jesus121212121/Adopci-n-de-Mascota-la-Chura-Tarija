import { Component } from '@angular/core';

//Importacion de los componentes 
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
irFacebook(){
  window.open('https://www.facebook.com/profile.php?id=61565924980011&locale=es_LA');
}
irTiktok(){
  window.open('https://www.tiktok.com/@adopciondemascota1?lang=es')
}
}
