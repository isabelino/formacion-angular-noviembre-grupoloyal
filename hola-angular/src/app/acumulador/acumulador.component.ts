import { Component } from "@angular/core";

@Component({
  selector:'app-acumulador',
  templateUrl:'./acumulador.component.html'
})

export class ContadorComponent{

  base:number=2;
  titulo:string ="Contador";
  numero:number = 10;

  acumulador(valor:number) {
    this.numero += valor;
  }

}
