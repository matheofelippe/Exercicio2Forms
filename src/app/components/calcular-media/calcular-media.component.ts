import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.css'
})
export class CalcularMediaComponent {

  mediaFinal:number = 0;
  resultado:string = '';

  calculaMedia(form: NgForm){
    this.mediaFinal = (form.value.AC1 * 0.15) + (form.value.AC2 *0.30) + (form.value.AG * 0.10) + (form.value.AF * 0.45);
    
    if (this.mediaFinal >= 5) {
      this.resultado = 'Aprovado';
    }else{
      this.resultado = 'Reprovado';
    }
  }
}



// Calcular Média
// • Crie uma componente que receberá as notas: AC1, AC2, AG e AF.
// • Calcule a média ao clicar no botão “Calcular” e mostre se está aprovado ou reprovado, a média é 5.
// • Média Final = (AC1 * 0,15) + (AC2 *0,30) + (AG * 0,10) + (AF * 0,45)