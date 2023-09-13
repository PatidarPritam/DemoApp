import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

   {
    component:ViewPageComponent,
    path:'viewpage/:name'
   },
  
  {
    component:HomeComponent,
    path:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
