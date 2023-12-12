import { Component, OnInit } from '@angular/core';
import { Circulo } from '../figuras';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class CirculoComponent {
  txtRadio = ""  
  area    = 0 
  circulo = new Circulo("circulo", 0)

  constructor() { }

  calcularArea() {
    this.circulo.radio  = parseInt(this.txtRadio) 
    this.area           = this.circulo.calcularArea() 
  }

  areaValida() {
    return !isNaN(this.area) 
  }
}
