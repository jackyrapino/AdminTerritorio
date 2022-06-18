import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.scss'],
})
export class PublicHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToTerritorios() {
    this.router.navigateByUrl('/solicitar-territorio');
  }
}
