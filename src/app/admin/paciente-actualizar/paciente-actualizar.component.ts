import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';

@Component({
  selector: 'app-paciente-actualizar',
  templateUrl: './paciente-actualizar.component.html',
  styleUrls: ['./paciente-actualizar.component.scss']
})
export class PacienteActualizarComponent implements OnInit {
  pacienteActualizarForm = this.fb.group({
    campo: ['', [Validators.required]],
    nuevoValor: ['', [Validators.required]]
  })

  paciente: any;
  campos = ['primer_nombre', 'segundo_nombre', 'primer_apellido', 'segundo_apellido', 'telefono', 'email'];


  constructor(private api: APIServiceService,
    private router: Router,
    private fb: FormBuilder,
    private data: DataParaActualizarService) { 
      this.paciente = data.data;
    }

  ngOnInit(): void {
  }

  async actualizarPaciente(){
    // console.log(JSON.stringify(this.pacienteActualizarForm.value));
    
    let myPaciente = this.pacienteActualizarForm.value;
    myPaciente['pacienteID'] = this.paciente.pacienteID;
    
    this.api.response = this.api.anyRequest(myPaciente, '/secretaria/paciente', 'put', true);
    let response = await this.api.response;
    alert(response.data.message);
    this.router.navigate(['/admin/pacientes']);
  }

}
