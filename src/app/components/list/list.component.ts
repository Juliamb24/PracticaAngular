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

  cargarDatos(){
    console.log(this.publicaciones)
  }


 }
