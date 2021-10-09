import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { InicioComponent } from './inicio/inicio.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { ListarExamenesComponent } from './listar-examenes/listar-examenes.component';
import { RealizarExamenComponent } from './realizar-examen/realizar-examen.component';
import { TestsComponent } from './tests/tests.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PaginaNoEncontradaComponent,
    AgendarCitaComponent,
    ListarExamenesComponent,
    RealizarExamenComponent,
    TestsComponent,
    FooterComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
