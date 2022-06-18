import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormValidator } from 'src/app/shared/form-validator';

@Component({
  selector: 'app-private-agregar-territorio',
  templateUrl: './private-agregar-territorio.component.html',
  styleUrls: ['./private-agregar-territorio.component.scss']
})
export class PrivateAgregarTerritorioComponent extends FormValidator implements OnInit {
  tipoSeleccionado: string = '';
  territorio:any;

  constructor(private FB: FormBuilder) {
    super();
  }

  ngOnInit(): void {}

definirMensajesError(): void {
  
}


  addTerritorio(){
    
  }

  initializeForm() {
    this.formGroup = this.FB.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
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
