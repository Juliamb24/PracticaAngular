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
      titulo:"primera noticia",
      imagen: "https://placehold.co/200x200",
      texto:"hola esta es la primera noticia",
      fecha:"02/02/24",
    },
    {
      titulo:"segunda noticia",
      imagen: "https://placehold.co/200x200",
      texto:"hola esta es la segunda noticia ",
      fecha:"02/11/24",
    }    
  ]

  insertData($event: INoticias) : void {
    this.arrNoticias.push($event)
  }

}
