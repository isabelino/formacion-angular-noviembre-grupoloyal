import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    HeroesComponent,
    ListadoComponent
  ],
  exports:[
    HeroesComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
