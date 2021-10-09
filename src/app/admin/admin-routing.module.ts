import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { CitaActualizarComponent } from './cita-actualizar/cita-actualizar.component';
import { CitasComponent } from './citas/citas.component';
import { ExamenActualizarComponent } from './examen-actualizar/examen-actualizar.component';
import { ExamenCrearComponent } from './examen-crear/examen-crear.component';
import { ExamenesComponent } from './examenes/examenes.component';
import { PacienteActualizarComponent } from './paciente-actualizar/paciente-actualizar.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PreguntaActualizarComponent } from './pregunta-actualizar/pregunta-actualizar.component';
import { PreguntaCrearComponent } from './pregunta-crear/pregunta-crear.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { RespuestaActualizarComponent } from './respuesta-actualizar/respuesta-actualizar.component';
import { RespuestaCrearComponent } from './respuesta-crear/respuesta-crear.component';
import { RespuestasComponent } from './respuestas/respuestas.component';
import { UsuarioActualizarComponent } from './usuario-actualizar/usuario-actualizar.component';
import { UsuarioCrearComponent } from './usuario-crear/usuario-crear.component';
import { UsuarioComponent } from './usuario/usuario.component';

// import AuthGuard pero no esta terminado...

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    {path: 'usuario', component: UsuarioComponent},
                    {path: 'usuario/actualizar', component: UsuarioActualizarComponent},
                    {path: 'usuario/crear', component: UsuarioCrearComponent},
                    {path: 'citas', component: CitasComponent},
                    {path: 'citas/actualizar', component: CitaActualizarComponent},
                    {path: 'pacientes', component: PacienteComponent},
                    {path: 'pacientes/actualizar', component: PacienteActualizarComponent},
                    {path: 'examenes', component: ExamenesComponent},
                    {path: 'examenes/actualizar', component: ExamenActualizarComponent},
                    {path: 'examenes/crear', component: ExamenCrearComponent},
                    {path: 'preguntas', component: PreguntasComponent},
                    {path: 'preguntas/actualizar', component: PreguntaActualizarComponent},
                    {path: 'preguntas/crear', component: PreguntaCrearComponent},
                    {path: 'respuestas', component: RespuestasComponent},
                    {path: 'respuestas/actualizar', component: RespuestaActualizarComponent},
                    {path: 'respuestas/crear', component: RespuestaCrearComponent},
                    {path: '', redirectTo: '/admin', component: AdminComponent}

                ]
            }
        ]
    }
]

@NgModule({
    imports: [
      RouterModule.forChild(adminRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AdminRoutingModule {}