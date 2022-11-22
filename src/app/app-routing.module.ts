import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AportesComponent } from './aportes/aportes.component';
import { HomeComponent } from './home/home.component';
import { MetodologiaArbolComponent } from './metodologia-arbol/metodologia-arbol.component';
import { MetodologiaComponent } from './metodologia/metodologia.component';
import { TestBurnoutComponent } from './test-burnout/test-burnout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'arbolCausas', component: MetodologiaArbolComponent },
  { path: '5w2h', component: MetodologiaComponent },
  { path: 'testBurnout', component: TestBurnoutComponent },
  { path: 'aportes', component: AportesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
