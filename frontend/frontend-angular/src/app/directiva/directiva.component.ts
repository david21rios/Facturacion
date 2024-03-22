import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-directiva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css'
})
export class DirectivaComponent {
  listaCurso: string[] = ["typescript", "javascript", "Java SE", "C#", "PHP"];
  habilitar: boolean = true;

  constructor() { }

  setHabiliar(): void{
    this.habilitar = (this.habilitar)?false:true;
  }
}