import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-private-ver-territorios',
  templateUrl: './private-ver-territorios.component.html',
  styleUrls: ['./private-ver-territorios.component.scss']
})
export class PrivateVerTerritoriosComponent implements OnInit {
  territorios: any;
  searchParam:any;

  constructor(private storageSVC: StorageService) {}

  ngOnInit(): void {
    this.getTerritorios();
  }

  getTerritorios() {
    this.storageSVC.GetAll('territorios').subscribe((data) => {
      this.territorios = data;
      console.log(data)
    });
  }

  searchTerritorio() {
    
  }
}
