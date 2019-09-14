import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security/security.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'security',component:SecurityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
