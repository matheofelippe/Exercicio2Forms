import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcularMediaComponent } from './components/calcular-media/calcular-media.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { CadastroDeClientesComponent } from './components/cadastro-de-clientes/cadastro-de-clientes.component';
import { ApoliceDeSeguroComponent } from './components/apolice-de-seguro/apolice-de-seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcularMediaComponent,
    CalculadoraComponent,
    CadastroDeClientesComponent,
    ApoliceDeSeguroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
