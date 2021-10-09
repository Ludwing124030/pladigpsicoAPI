import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-pregunta-crear',
  templateUrl: './pregunta-crear.component.html',
  styleUrls: ['./pregunta-crear.component.scss']
})
export class PreguntaCrearComponent implements OnInit {
  preguntaCrearForm = this.fb.group({
    pregunta: ['', [Validators.required, Validators.maxLength(255)]],
    examenID: ['', [Validators.required]],
    preguntaID: ['', [Validators.required]]
  })

  constructor(private api: APIServiceService,
    private router: Router,
    private fb: FormBuilder)
    { }


  ngOnInit(): void {
  }

  async createPregunta(){
    this.api.response = this.api.anyRequest(this.preguntaCrearForm.value, '/especialista/new-cr/pregunta', 'post', true);
    let response = await this.api.response;
    alert(response.data.message);
    this.router.navigate(['/admin/preguntas']);
  }

}
 