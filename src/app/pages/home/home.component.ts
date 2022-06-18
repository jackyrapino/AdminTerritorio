import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private storageSVC: StorageService) {}

  ngOnInit(): void {
    this.getTest();
  }

  getTest() {
    this.storageSVC.GetAll('test').subscribe((data) => {
      console.log(data);
    });
  }
}
