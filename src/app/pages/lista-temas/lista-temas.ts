import { Component,OnInit } from '@angular/core';
import { TemaService } from '../../services/tema';
import { Tema } from '../../models/tema';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-temas',
  imports: [CommonModule],
  templateUrl: './lista-temas.html',
  styleUrl: './lista-temas.css',
})
export class ListaTemas {

  temas: Tema[] = [];
  temaSeleccionado?: Tema;
  constructor(
    private temaService: TemaService,

  ) {}

  ngOnInit() {
    this.temas = this.temaService.getTemas();

    this.temaSeleccionado = this.temas[0];
  }

  verDetalle(tema: Tema) {
  this.temaSeleccionado = tema;
  }
  
  trackByTema(index: number, tema: Tema): number {
  return tema.id;
}
}
