import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  resultado:number = 0;
  operacao:string = '';

  calculaOperacao(form: NgForm){

    if(this.operacao === '+'){
      this.resultado = (form.value.number1 + form.value.number2);
    }else if(this.operacao === '-'){
      this.resultado = (form.value.number1 - form.value.number2);
    }else if(this.operacao === '*'){
      this.resultado = (form.value.number1 * form.value.number2);
    }else{
      this.resultado = (form.value.number1 / form.value.number2);
    }
  }
}



// 2. Calculadora
// • Crie um componente que receberá dois números e a operação matemática (soma, subtração, multiplicação ou
// divisão). Exiba o resultado em um input.