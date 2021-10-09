import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';

@Component({
  selector: 'app-examen-actualizar',
  templateUrl: './examen-actualizar.component.html',
  styleUrls: ['./examen-actualizar.component.scss']
})
export class ExamenActualizarComponent implements OnInit {
  examenActualizarForm = this.fb.group({
    campo: ['', [Validators.required]],
    nuevoValor: ['Ingrese el nuevo valor del campo.', [Validators.required]]
  })

  examen: any;
  campos = ['titulo', 'codigo', 'habilitado']

  constructor(private api: APIServiceService,
    private router: Router,
    private fb: FormBuilder,
    private data: DataParaActualizarService) { 
      this.examen = data.data;
    }

  ngOnInit(): void {
  }

  async actualizarExamen() {
    let myExamen = this.examenActualizarForm.value;
    myExamen['examenID'] = this.examen.examenID;

    this.api.response = this.api.anyRequest(myExamen, 'especialista/examen', 'put', true);
    let response = await this.api.response;
    alert(response.data.message);
    this.router.navigate(['/admin/examenes']);
  }

}
