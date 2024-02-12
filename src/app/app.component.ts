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
      imagen: "https://cdn.discordapp.com/attachments/1111677701405823058/1206606229405704222/Z.png?ex=65dc9e9e&is=65ca299e&hm=7fb08dc349f026152b724b126ffe65bc130ecbc06dedf9d1dfcb8b1c4d23b6e5&",
      texto:"La adulta que estaba cuidando de este niño no pudo creer lo que estaba viendo. El pequeño jugaba a meter su cabeza por el agujero de la silla cuando, después de meterla por completo, no pudo sacarla. Los dos pasaron unos momentos angustiantes hasta que por fin, igual que entró, salió sin necesidad de los bomberos, asegura Alfonso Arús.",
      fecha:"2021-09-22",
    },
    {
      titulo:"El tatuaje que arrasa en Sevilla (y en el resto de España): un serranito que además genera debate",
      imagen: "https://cdn.discordapp.com/attachments/1111677701405823058/1206606453654298754/9k.png?ex=65dc9ed4&is=65ca29d4&hm=30ba2f166ec8b20ba1cfd4ff9545381ead02a35fb0bccc3d7bf920b4a22a90c9&",
      texto:"En los últimos días, se ha hecho viral el tatuaje, perfectamente ejecutado, que pidió hacerse un sevillano. El dibujo: un auténtico serranito en el que se explica de forma detallada, tanto en diseño como en la información que le acompaña, los ingredientes de este famoso bocata: pan, filete de lomo, pimiento verde, jamón serrano, tomate, alioli y (de nuevo) pan. ",
      fecha:"2020-04-04",
    }    
  ]

  insertData($event: INoticias) : void {
    this.arrNoticias.push($event)
  }

}
