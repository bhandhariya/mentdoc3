import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security/security.component';

const appRoutes: Routes = [
  
  { path : '', component: AdmindashboardComponent,children : [
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'home', component: HomeComponent },
      { path: 'security', component: SecurityComponent },
      { path : '', redirectTo:'home', pathMatch : 'full'},
      { path: '**', redirectTo: 'blog' }
   ]
  }
];

@NgModule({
  declarations: [
    AdmindashboardComponent,
    BlogComponent, 
    ContactComponent, 
    HomeComponent, 
    SecurityComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class AdminModule { }
