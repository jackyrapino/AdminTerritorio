import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-solicitar-territorio',
  templateUrl: './solicitar-territorio.component.html',
  styleUrls: ['./solicitar-territorio.component.scss'],
})
export class SolicitarTerritorioComponent implements OnInit {
  hermanos: any;

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
}
