import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MetodologiaArbolComponent } from './metodologia-arbol/metodologia-arbol.component';
import { MetodologiaComponent } from './metodologia/metodologia.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'arbolCausas', component: MetodologiaArbolComponent},
  { path: '5w2h', component: MetodologiaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
