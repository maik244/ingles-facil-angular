
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TemaService } from '../../services/tema';
import { Tema } from '../../models/tema';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-temas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-temas.html',
  styleUrls: ['./lista-temas.css'],
})
export class ListaTemas implements OnInit {

  temas: Tema[] = [];
  temaSeleccionado: Tema | null = null;

  constructor(
    private temaService: TemaService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.temas = [...this.temaService.getTemas()];

    // Forzar nuevo objeto
    this.temaSeleccionado = structuredClone(this.temas[0]);

    // Forzar render
    this.cd.detectChanges();
  }

  verDetalle(tema: Tema): void {

    // limpiar primero
    this.temaSeleccionado = null;

    // pequeño timeout para forzar repaint
    setTimeout(() => {

      this.temaSeleccionado = structuredClone(tema);

      // forzar actualización
      this.cd.detectChanges();

    }, 0);
  }
}
