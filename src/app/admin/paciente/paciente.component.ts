import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {
  pacientes: Array<any> = [];


   constructor(private api: APIServiceService, 
    private router: Router,
    private data: DataParaActualizarService) { 
  }

  ngOnInit(): void {
    this.getPacientes();
  }

  trackByPacienteID(index: number, paciente: any){
    return paciente.pacienteID;
  }

  getPacientes(){
    this.api.response = this.api.anyRequest("", "/secretaria/paciente", "get", true);
    this.api.response.then(r => this.pacientes = r.data.listaDePacientes);
  }

  //Si hubiera que eliminar pacientes realmente, esta funcion tendria utilidad.
  async obtenerPacientes(){
    this.api.response = this.api.anyRequest("", "/secretaria/paciente", "get", true);
    let response = await this.api.response;
    this.pacientes = response.data.listaDePacientes;
  }

  updatePaciente(paciente: any){
    if(paciente !== null){
      this.data.data = paciente;
      this.router.navigate(['/admin/pacientes/actualizar']);
    }
  }



}
