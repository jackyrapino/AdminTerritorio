import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-solicitar-territorio',
  templateUrl: './solicitar-territorio.component.html',
  styleUrls: ['./solicitar-territorio.component.scss'],
})
export class SolicitarTerritorioComponent implements OnInit {
  hermanos: any;
  nombre: string = '';
  hermanoSeleccionado: any;

  constructor(private storageSVC: StorageService) {}

  ngOnInit(): void {
    this.getHermanos();
  }

  getHermanos() {
    this.storageSVC.GetAll('hermanos').subscribe((hermanos) => {
      this.hermanos = hermanos;
      console.log(this.hermanos);
    });
  }

  seleccionarHermano(hermano: any) {
    if (this.hermanoSeleccionado) this.removeSelected();
    this.hermanoSeleccionado = '';
    this.hermanoSeleccionado = hermano;
    console.log(this.hermanoSeleccionado);

    let card = document.querySelector(`#${hermano.id}`) as HTMLElement;
    card.classList.add('selected');
  }

  removeSelected() {
    let card = document.querySelector(
      `#${this.hermanoSeleccionado.id}`
    ) as HTMLElement;
    card.classList.remove('selected');
  }
}
