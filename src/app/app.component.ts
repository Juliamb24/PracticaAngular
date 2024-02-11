import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { INoticias } from './interfaces/i-noticias.interface';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrNoticias: INoticias[] = [
    {
      titulo:"Un niño atasca su cabeza en el agujero de una silla",
      imagen: "https://placehold.co/200x200",
      texto:"La adulta que estaba cuidando de este niño no pudo creer lo que estaba viendo. El pequeño jugaba a meter su cabeza por el agujero de la silla cuando, después de meterla por completo, no pudo sacarla.Los dos pasaron unos momentos angustiantes hasta que por fin, igual que entró, salió sin necesidad de los bomberos, asegura Alfonso Arús.",
      fecha:"21/09/22",
    },
    {
      titulo:"El tatuaje que arrasa en Sevilla (y en el resto de España): un serranito que además genera debate",
      imagen: "https://placehold.co/200x200",
      texto:"En los últimos días, se ha hecho viral el tatuaje, perfectamente ejecutado, que pidió hacerse un sevillano. El dibujo: un auténtico serranito en el que se explica de forma detallada, tanto en diseño como en la información que le acompaña, los ingredientes de este famoso bocata: pan, filete de lomo, pimiento verde, jamón serrano, tomate, alioli y (de nuevo) pan. ",
      fecha:"04/04/23",
    }    
  ]

  insertData($event: INoticias) : void {
    this.arrNoticias.push($event)
  }

}
