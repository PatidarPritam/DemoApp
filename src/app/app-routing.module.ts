import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPageComponent } from './components/view-page/view-page.component';
//import { RecommendedListOfTopicsComponent } from './components/recommended-list-of-topics/recommended-list-of-topics.component';

const routes: Routes = [

   {
    component:ViewPageComponent,
    path:'viewpage/:name'
   },
  //  {
  //   component:RecommendedListOfTopicsComponent,
  //   path:''
  //  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
