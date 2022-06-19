import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-public-mi-territorio',
  templateUrl: './public-mi-territorio.component.html',
  styleUrls: ['./public-mi-territorio.component.scss']
})
export class PublicMiTerritorioComponent implements OnInit {
  @Input() territorio: any;

  constructor(private storageSVC: StorageService, private alertSVC: AlertService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.territorio);
  }

  async devolverTerritorio() {
    let confirm: any = false;
    confirm = await this.alertSVC.confirmAlert(`¿Desea devolver el territorio ${this.territorio.id}?`, 'Si', 'No', 'Devuelto correctamente');
    if (confirm) {
      localStorage.removeItem('solicitud');
      this.router.navigate(['/']);
    }
  }
}