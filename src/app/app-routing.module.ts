import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempformComponent } from './tempform/tempform.component';
import { TemploginComponent } from './templogin/templogin.component';


const routes: Routes = [{path:'', component:TempformComponent},
{path:'login',component:TemploginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
 
],



  exports: [RouterModule],

})
export class AppRoutingModule { }
export const routingComponents = [TempformComponent,TemploginComponent]