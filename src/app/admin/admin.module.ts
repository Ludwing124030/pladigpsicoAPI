import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ExamenesComponent } from './examenes/examenes.component';
import { UsuarioActualizarComponent } from './usuario-actualizar/usuario-actualizar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioCrearComponent } from './usuario-crear/usuario-crear.component';
import { CitasComponent } from './citas/citas.component';
import { CitaActualizarComponent } from './cita-actualizar/cita-actualizar.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PacienteActualizarComponent } from './paciente-actualizar/paciente-actualizar.component';
import { ExamenCrearComponent } from './examen-crear/examen-crear.component';
import { ExamenActualizarComponent } from './examen-actualizar/examen-actualizar.component';
import { PreguntaActualizarComponent } from './pregunta-actualizar/pregunta-actualizar.component';
import { PreguntaCrearComponent } from './pregunta-crear/pregunta-crear.component';
import { RespuestasComponent } from './respuestas/respuestas.component';
import { RespuestaCrearComponent } from './respuesta-crear/respuesta-crear.component';
import { RespuestaActualizarComponent } from './respuesta-actualizar/respuesta-actualizar.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        AdminComponent,
        PreguntasComponent,
        UsuarioComponent,
        ExamenesComponent,
        UsuarioActualizarComponent,
        UsuarioCrearComponent,
        CitasComponent,
        CitaActualizarComponent,
        PacienteComponent,
        PacienteActualizarComponent,
        ExamenCrearComponent,
        ExamenActualizarComponent,
        PreguntaActualizarComponent,
        PreguntaCrearComponent,
        RespuestasComponent,
        RespuestaCrearComponent,
        RespuestaActualizarComponent
    ]
})
export class AdminModule {}