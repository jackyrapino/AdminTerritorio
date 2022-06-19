import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-private-ver-territorios',
  templateUrl: './private-ver-territorios.component.html',
  styleUrls: ['./private-ver-territorios.component.scss']
})
export class PrivateVerTerritoriosComponent implements OnInit {
  territorios: any;
  territoriosFijos: any;
  territoriosCelulares: any;
  searchParam: any;
  loaded: boolean = false;

  constructor(private storageSVC: StorageService) {}

  ngOnInit(): void {
    this.getTerritorios();
    setTimeout(() => {
      this.setFijos();
    }, 1000);
  }

  getTerritorios() {
    this.storageSVC.GetAll('territorios-fijos').subscribe((data) => {
      this.territoriosFijos = data;
      console.log(this.territoriosFijos);
    });

    this.storageSVC.GetAll('territorios-celulares').subscribe((data) => {
      this.territoriosCelulares = data;
      console.log(data);
    });
  }

  setFijos() {
    this.territorios = this.territoriosFijos;
    this.removeClasses();
    let button = document.getElementById('fijos');
    button.classList.add('selected');
  }

  setCelulares() {
    this.territorios = this.territoriosCelulares;
    this.removeClasses();
    let button = document.getElementById('celulares');
    button.classList.add('selected');
  }

  removeClasses() {
    let button = document.getElementById('fijos');
    button.classList.remove('selected');
    let button2 = document.getElementById('celulares');
    button2.classList.remove('selected');
  }
}
