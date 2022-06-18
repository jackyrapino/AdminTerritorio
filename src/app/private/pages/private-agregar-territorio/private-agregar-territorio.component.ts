import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { FormValidator } from 'src/app/shared/form-validator';

@Component({
  selector: 'app-private-agregar-territorio',
  templateUrl: './private-agregar-territorio.component.html',
  styleUrls: ['./private-agregar-territorio.component.scss']
})
export class PrivateAgregarTerritorioComponent extends FormValidator implements OnInit {
  tipoSeleccionado: string = '';
  territorio: any;

  constructor(private FB: FormBuilder, storageSVC:StorageService) {
    super();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  definirMensajesError(): void {}

  addTerritorio() {
    let numeroFormateados = (this.formGroup.value.numeros).split('\n');

    this.territorio = {
      numero: this.formGroup.value.numero,
      tipo: this.tipoSeleccionado,
      numeros: numeroFormateados
    };
    console.log(this.territorio);

  }

  initializeForm() {
    this.formGroup = this.FB.group({
      numero: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      numeros: new FormControl('', [Validators.required])
    });
  }

  selectFijos() {
    this.tipoSeleccionado = 'fijos';
    this.removeAllClass();
    let button = document.querySelector('#fijos') as HTMLElement;
    button.classList.add('selected');
  }

  selectCelulares() {
    this.tipoSeleccionado = 'celulares';
    this.removeAllClass();
    let button = document.querySelector('#celulares') as HTMLElement;
    button.classList.add('selected');
  }

  removeAllClass() {
    let button1 = document.querySelector('#fijos') as HTMLElement;
    let button2 = document.querySelector('#celulares') as HTMLElement;
    button1.classList.remove('selected');
    button2.classList.remove('selected');
  }
}
