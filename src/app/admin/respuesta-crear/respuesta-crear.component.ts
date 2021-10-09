import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-respuesta-crear',
  templateUrl: './respuesta-crear.component.html',
  styleUrls: ['./respuesta-crear.component.scss']
})
export class RespuestaCrearComponent implements OnInit {
  respuestaCrearForm = this.fb.group({
    respuesta: ['', [Validators.required, Validators.maxLength(255)]],
    examenID: ['', [Validators.required]],
    preguntaID: ['', [Validators.required]],
    respuestaID: ['', [Validators.required]],
    seleccion: ['', [Validators.required]]
  })

  constructor(private api: APIServiceService,
    private router: Router,
    private fb: FormBuilder)
    { }

  ngOnInit(): void {
  }

  async createRespuesta(){
    this.api.response = this.api.anyRequest(this.respuestaCrearForm.value, '/especialista/examen/respuesta', 'post', true);
    let response = await this.api.response;
    alert(response.data.message);
    this.router.navigate(['/admin/respuestas']);
  }
}
