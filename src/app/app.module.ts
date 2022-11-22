import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IgxStepperModule, IgxIconModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MetodologiaArbolComponent } from './metodologia-arbol/metodologia-arbol.component';
import { MetodologiaComponent } from './metodologia/metodologia.component';
import { TestBurnoutComponent } from './test-burnout/test-burnout.component';
import { AportesComponent } from './aportes/aportes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MetodologiaArbolComponent,
    MetodologiaComponent,
    TestBurnoutComponent,
    AportesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxStepperModule,
    IgxIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MetodologiaArbolComponent,
    MetodologiaComponent,]
})
export class AppModule {
}
