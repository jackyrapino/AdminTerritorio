import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';
import { Location } from '@angular/common';

export interface Territorio {
  id: string;
  tipo: string;
  numeros: any[];
  devolucion?: any;
}

@Component({
  selector: 'app-solicitar-territorio',
  templateUrl: './solicitar-territorio.component.html',
  styleUrls: ['./solicitar-territorio.component.scss']
})
export class SolicitarTerritorioComponent implements OnInit {
  hermanos: any;
  nombre: string = '';
  hermanoSeleccionado: any;
  tipoSeleccionado: string;
  solicitud: any;
  territorios: Territorio | any;
  showNav: boolean = true;

  constructor(private router: Router, private location: Location, private storageSVC: StorageService) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.handleSection();
    });

  }

  handleSection() {
    this.tipoSeleccionado = this.location.path().split('/')[2];
    console.log(this.tipoSeleccionado);
  }

  ngOnInit(): void {
    this.getHermanos();
    this.getTerritorios();
    this.getSolicitud();

  }

  getSolicitud() {
    this.solicitud = JSON.parse(localStorage.getItem('solicitud'));
    this.setShowNav();
  }

  setShowNav() {
    if (this.solicitud) {
      this.showNav = false;
    }
  }
  getTerritorios() {
    switch (this.tipoSeleccionado) {
      case 'fijos':
        this.storageSVC.GetAll('territorios-fijos').subscribe((data) => {
          this.territorios = data;
          console.log(this.territorios);
        });
        break;
      case 'celulares':
        this.storageSVC.GetAll('territorios-celulares').subscribe((data) => {
          this.territorios = data;
          console.log(data);
        });
        break;
    }
  }

  getLastTerritorioByDate() {
    let fechas = [];
    let territorio;
    let aux;

    this.territorios.forEach((territorio) => {
      if (territorio.devolucion === undefined) {
        aux = territorio;
      }

      let fechaAux = new Date(territorio.devolucion);
      fechas.push(fechaAux);
    });

    if (aux) {
      return aux;
    }

    if (!fechas) return;
    let primerFecha = new Date(Math.min(...fechas));
    let formatFecha = primerFecha.toLocaleDateString();
    territorio = this.territorios.find((element) => element.devolucion == formatFecha);
    return territorio;
  }

  getHermanos() {
    this.storageSVC.GetAll('hermanos').subscribe((data) => {
      this.hermanos = data;
      console.log(this.hermanos);
    });
  }

  seleccionarHermano(hermano: any) {
    if (this.hermanoSeleccionado) this.removeSelected();
    this.hermanoSeleccionado = '';
    this.hermanoSeleccionado = hermano;
    let card = document.querySelector(`#${hermano.id}`) as HTMLElement;
    card.classList.add('selected');
  }

  removeSelected() {
    let card = document.querySelector(`#${this.hermanoSeleccionado.id}`) as HTMLElement;
    card.classList.remove('selected');
  }

  solicitar() {
    let territorio = this.getLastTerritorioByDate();
    this.solicitud = {};
    this.solicitud.hermano = this.hermanoSeleccionado;
    this.solicitud.tipo = this.tipoSeleccionado;
    this.solicitud.territorio = territorio;
    localStorage.setItem('solicitud', JSON.stringify(this.solicitud));
    this.setShowNav();
  }
}
