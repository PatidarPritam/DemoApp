import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [

   {
    component:ViewPageComponent,
    path:'viewpage/:name'
   },
  
  {
    component:HomeComponent,
    path:''
  },
  {
    component:ContactUsComponent,
    path:'contactus'
  },
  {
    component:AboutUsComponent,
    path:'aboutus'
  },
  {
    path:'services',
    component:ServicesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
