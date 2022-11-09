import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroeBorrado:string|undefined="";
  heroes:string[]=["Spiderman","Ironman","Thor","Hulk","Capitan America","Antman"];

  borrarHeroe(){
    this.heroeBorrado=this.heroes.pop();
  }

}
