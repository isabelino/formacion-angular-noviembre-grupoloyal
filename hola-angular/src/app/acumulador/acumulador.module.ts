import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './acumulador.component';



@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AcumuladorModule { }
