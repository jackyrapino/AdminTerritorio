import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { FormValidator } from 'src/app/shared/form-validator';

@Component({
  selector: 'app-private-agregar-hermanos',
  templateUrl: './private-agregar-hermanos.component.html',
  styleUrls: ['./private-agregar-hermanos.component.scss'],
})
export class PrivateAgregarHermanosComponent
  extends FormValidator
  implements OnInit
{
  hermano: any;
  hermanos: any;

  constructor(
    private FB: FormBuilder,
    private storageSVC: StorageService,
    private alertSVC: AlertService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getHermanos();
    this.initializeForm();
  }

  getHermanos() {
    this.storageSVC.GetAll('hermanos').subscribe((data) => {
      this.hermanos = data;
    });
  }

  existeHermano() {
    let existe = false;
    this.hermanos.forEach((hermano) => {
      if (hermano.nombre === this.formGroup.value.nombre) {
        existe = true;
        this.formGroup.controls.nombre.setErrors({ existe: true });
      }
    });
    console.log(existe);
    return existe;
  }

  definirMensajesError(): void {
    this.mensajesError = {
      nombre: {
        required: 'El nombre y apellido es requerido',
        pattern: 'Solo pueden ser letras',
        existe: 'El nombre del hermano ya existe',
      },
    };
  }

  addHermano() {
    let hermano = this.formGroup.value;
    this.storageSVC.Insert('hermanos', hermano);

    this.alertSVC.alertBottom('success', 'Hermano agregado correctamente');
    this.formGroup.reset();
  }

  initializeForm() {
    this.formGroup = this.FB.group({
      nombre: new FormControl('', [
        Validators.required,
        // Validators.pattern(),
      ]),
    });
  }
}
