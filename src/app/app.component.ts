import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { INoticias } from './interfaces/i-noticias.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrNoticias: INoticias[] = [
    {
      titulo:"primera noticia",
      imagen: "url.htpjdhn,.com",
      texto:"hola esta es la primera noticia",
      fecha:2/2/24,
    },
    {
      titulo:"segunda noticia",
      imagen: "url.dfsfe,.com",
      texto:"hola esta es la segunda noticia ",
      fecha:15/2/24,
    }    
  ]
}
