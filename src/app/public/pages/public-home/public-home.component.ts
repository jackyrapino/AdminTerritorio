import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss']
})
export class PublicHomeComponent implements OnInit {
  tipoSeleccionado: any;

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  gotoSolicitarTerritorioFijos() {
    this.tipoSeleccionado = 'fijos';
    this.router.navigate([`solicitar-territorio/${this.tipoSeleccionado}`]);
  }

  gotoSolicitarTerritorioCelulares() {
    this.tipoSeleccionado = 'celulares';
    this.router.navigate([`solicitar-territorio/${this.tipoSeleccionado}`]);
  }
}
