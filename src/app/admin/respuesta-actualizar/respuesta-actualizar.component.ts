import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';

@Component({
  selector: 'app-respuesta-actualizar',
  templateUrl: './respuesta-actualizar.component.html',
  styleUrls: ['./respuesta-actualizar.component.scss']
})
export class RespuestaActualizarComponent implements OnInit {
  respuestaActualizarForm = this.fb.group({
    campo: ['', [Validators.required]],
    nuevoValor: ['', [Validators.required]]
  })

  respuesta: any;
  campos = ['respuesta', 'seleccion'];

  constructor(private api: APIServiceService,
    private router: Router,
    private fb: FormBuilder,
    private data: DataParaActualizarService) { 
      this.respuesta = data.data;
    }

  ngOnInit(): void {
  }

  async actualizarRespuesta() {
    let myRespuesta = this.respuesta;
    myRespuesta['campo'] = this.respuestaActualizarForm.value['campo'];
    myRespuesta['nuevoValor'] = this.respuestaActualizarForm.value['nuevoValor'];
    this.api.response = this.api.anyRequest(myRespuesta, 'especialista/examen/respuesta', 'put', true);
    let response = await this.api.response;
    alert(response.data.message);
    this.router.navigate(['/admin/respuestas']);
  }


}
