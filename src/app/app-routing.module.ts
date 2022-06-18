import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateHomeComponent } from './private/pages/private-home/private-home.component';
import { PublicHomeComponent } from './public/pages/public-home/public-home.component';

const routes: Routes = [
  { path: '', component: PublicHomeComponent },
  { path: 'admin', component: PrivateHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
