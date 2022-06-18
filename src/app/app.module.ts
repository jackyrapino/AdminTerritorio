import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateHomeComponent } from './private/pages/private-home/private-home.component';
import { PublicHomeComponent } from './public/pages/public-home/public-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivateHomeComponent,
    PublicHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
