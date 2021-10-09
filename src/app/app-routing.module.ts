import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

import { AuthGuard } from './auth/auth.guard';
import { InicioComponent } from './inicio/inicio.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { ListarExamenesComponent } from './listar-examenes/listar-examenes.component';
import { RealizarExamenComponent } from './realizar-examen/realizar-examen.component';
import { TestsComponent } from './tests/tests.component';

const routes: Routes = [];

/**
 * Deberia separar admin en: secretaria y especialista
 * pero para el backend solo es nombre de ruta
 * la autenticacion la maneja automaticamente 
 * dado los permisos que tenga el JWT. 
 * Por lo que el routing aqui no deberia de importar.
 */

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'inicio', component: InicioComponent},
    
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      canLoad: [AuthGuard]
    },
    {path: 'agendar-cita', component: AgendarCitaComponent},
    {path: 'tests', component: TestsComponent},
    {path: 'realizar-test', component: RealizarExamenComponent},
    {path: 'realizar-test/:titulo', component: RealizarExamenComponent},
    {path: 'listar-examenes', component: ListarExamenesComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component: PaginaNoEncontradaComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
