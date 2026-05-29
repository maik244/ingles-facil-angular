

import { Component, OnInit } from '@angular/core';
import { TemaService } from '../../services/tema';
import { Tema } from '../../models/tema';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-temas',
  imports: [CommonModule],
  templateUrl: './lista-temas.html',
  styleUrls: ['./lista-temas.css'],
})
export class ListaTemas implements OnInit {

  temas: Tema[] = [];
  temaSeleccionado?: Tema;

  constructor(
    private temaService: TemaService
  ) {}

  ngOnInit(): void {

    this.temas = this.temaService.getTemas();

    // nueva referencia
    this.temaSeleccionado = { ...this.temas[0] };

  }

  verDetalle(tema: Tema): void {

    // nueva referencia
    this.temaSeleccionado = { ...tema };

  }

}

