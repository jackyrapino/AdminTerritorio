import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivateHomeComponent } from './private/pages/private-home/private-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: PrivateHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
