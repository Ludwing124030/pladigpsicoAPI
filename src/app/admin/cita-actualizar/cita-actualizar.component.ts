import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';

@Component({
  selector: 'app-cita-actualizar',
  templateUrl: './cita-actualizar.component.html',
  styleUrls: ['./cita-actualizar.component.scss']
})
export class CitaActualizarComponent implements OnInit {
  citaActualizarForm = this.fb.group({
    campo: ['', [Validators.required]],
    nuevoValor: ['Ingrese el nuevo valor del campo.', [Validators.required]]
  })

  cita: any;
  campos = ['estado_id'];

  constructor(private api: APIServiceService,
    private router: Router,
    private fb: FormBuilder,
    private data: DataParaActualizarService) { 
      this.cita = data.data;
    }

  ngOnInit(): void {
  }

  async actualizarCita(){
    // console.log(JSON.stringify(this.citaActualizarForm.value));
    
    let myCita = this.citaActualizarForm.value;
    myCita['pacienteID'] = this.cita.paciente.pacienteID;
    myCita['horarioID'] = this.cita.horario.horarioID;
    
    this.api.response = this.api.anyRequest(this.citaActualizarForm.value, '/secretaria/cita', 'put', true);
    let response = await this.api.response;
    alert(response.data.message);
    this.router.navigate(['/admin/citas']);
  }

}
