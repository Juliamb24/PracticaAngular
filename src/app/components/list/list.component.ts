import { Component, Input } from '@angular/core';
import { INoticias } from '../../interfaces/i-noticias.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() publicaciones: INoticias[] = [];
  ngOnInit(): void {
    this.cargarDatos()
  }

  cargarDatos(): string {
    let html = "";
    this.publicaciones.forEach(noticia =>{
      html += `<article>
                <h3>${noticia.titulo}</h3>
                 <p>${noticia.texto}</p>
                <div><img src="${noticia.imagen}" alt="${noticia.titulo}"></div>
                <span>${noticia.fecha}</span>
               </article>`
    })
    
    return html;
  }


 }
