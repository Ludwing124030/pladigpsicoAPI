import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';

@Component({
  selector: 'app-pregunta-actualizar',
  templateUrl: './pregunta-actualizar.component.html',
  styleUrls: ['./pregunta-actualizar.component.scss']
})
export class PreguntaActualizarComponent implements OnInit {
  preguntaActualizarForm = this.fb.group({
    examenID: ['', [Validators.required]],
    preguntaID: ['', [Validators.required]],
    pregunta: ['Ingrese la nueva pregunta', [Validators.required]]
  })

  // pregunta: any;
  campos = ['examen_id', 'pregunta_id', 'pregunta'];

  constructor(private api: APIServiceService,
    private router: Router,
    private fb: FormBuilder,
    private data: DataParaActualizarService) { 
      // this.pregunta = data.data;
    }

    async actualizarPregunta() {
      this.api.response = this.api.anyRequest(this.preguntaActualizarForm.value, 'especialista/examen/pregunta', 'put', true);
      let response = await this.api.response;
      alert(response.data.message);
      this.router.navigate(['/admin/preguntas']);
    }


  ngOnInit(): void {
  }




}
