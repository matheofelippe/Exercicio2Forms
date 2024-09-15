import { Component } from '@angular/core';
import { Cliente } from './Cliente';

@Component({
  selector: 'app-cadastro-de-clientes',
  templateUrl: './cadastro-de-clientes.component.html',
  styleUrl: './cadastro-de-clientes.component.css'
})
export class CadastroDeClientesComponent {
  id:number = 0;
  cliente: Cliente = new Cliente(this.id, '', '', 0);
  clientes: Cliente[] = [];

  cadastrarCliente() {
    console.log(this.cliente);
    this.clientes.push(new Cliente(this.cliente.id, this.cliente.nome, this.cliente.email, this.cliente.idade));
    this.cliente = new Cliente(this.id, '', '', 0); // Reseta o formulário
    this.id++;
  }
}