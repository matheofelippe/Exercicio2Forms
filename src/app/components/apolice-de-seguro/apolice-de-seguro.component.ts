import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-apolice-de-seguro',
  templateUrl: './apolice-de-seguro.component.html',
  styleUrl: './apolice-de-seguro.component.css'
})
export class ApoliceDeSeguroComponent {

  valorAutomovel:number = 0
  valorSeguro:number = 0;

  calculaSeguro(form: NgForm){

    if(form.value.sexo == 1  && form.value.idade <= 25){
      this.valorSeguro = (15 / 100) * this.valorAutomovel;

    }else if(form.value.sexo == 1  && form.value.idade > 25){
      this.valorSeguro = (10 / 100) * this.valorAutomovel;

    }else if(form.value.sexo == 2){
      this.valorSeguro = (8 / 100) * this.valorAutomovel;

    }
  }
}
