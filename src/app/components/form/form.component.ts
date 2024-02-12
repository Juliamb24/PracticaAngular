import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticias } from '../../interfaces/i-noticias.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  nuevaNoticia: INoticias = {titulo:"", imagen:"", texto:"", fecha:""}

  @Output() noticiaPintada: EventEmitter<INoticias> = new EventEmitter()

guardar(): void{
  if(this.nuevaNoticia.titulo !== "" && this.nuevaNoticia.imagen !== "" && this.nuevaNoticia.texto !== "" && this.nuevaNoticia.fecha !== ""){
    this.noticiaPintada.emit(this.nuevaNoticia)
    this.nuevaNoticia = {titulo:"", imagen:"", texto:"", fecha:""}
  }else {
    alert("Faltan campos por completar")
  }
  
}

}
