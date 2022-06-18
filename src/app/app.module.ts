import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateHomeComponent } from './private/pages/private-home/private-home.component';
import { PublicHomeComponent } from './public/pages/public-home/public-home.component';
import { PrivateVerTerritoriosComponent } from './private/pages/private-ver-territorios/private-ver-territorios.component';
import { PrivateAgregarTerritorioComponent } from './private/pages/private-agregar-territorio/private-agregar-territorio.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardTerritorioComponent } from './shared/card-territorio/card-territorio.component';
import { SolicitarTerritorioComponent } from './public/pages/solicitar-territorio/solicitar-territorio.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivateHomeComponent,
    PublicHomeComponent,
    PrivateVerTerritoriosComponent,
    PrivateAgregarTerritorioComponent,
    NavbarComponent,
    CardTerritorioComponent,
    SolicitarTerritorioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
