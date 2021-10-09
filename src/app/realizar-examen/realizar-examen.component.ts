import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../admin/data-para-actualizar.service';
import { RespuestasComponent } from '../admin/respuestas/respuestas.component';

@Component({
  selector: 'app-realizar-examen',
  templateUrl: './realizar-examen.component.html',
  styleUrls: ['./realizar-examen.component.scss']
})
export class RealizarExamenComponent implements OnInit {

  titulo:any;

  examenCrearForm = this.fb.group({
    preguntas: this.fb.array([], Validators.required),
    paciente: this.fb.group({
      primer_nombre: ['', [Validators.required, Validators.maxLength(20)]],
      segundo_nombre: ['', [Validators.required, Validators.maxLength(20)]],
      primer_apellido: ['', [Validators.required, Validators.maxLength(20)]],
      segundo_apellido: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.maxLength(12)]],
    }),
    codigo: ['', [Validators.required]]
  })

  examenSolicitar: number;
  examenSolicitado: any;
  constructor(private api: APIServiceService, 
    private router: Router,
    private route:ActivatedRoute,
    private data: DataParaActualizarService,
    private fb: FormBuilder) { 
      this.examenSolicitar = data.data['examenID'];
      this.getExamen();
  }

  ngOnInit() {
    this.titulo=this.route.snapshot.paramMap.get('titulo');
  }

  obtenerExamen() {
    this.api.response = this.api.anyRequest(this.data.data, 'paciente/solicitar/examen' ,'post', false);
    this.api.response.then( r => this.examenSolicitado = r.data.examen);
  }

  async getExamen(){
    this.api.response = this.api.anyRequest(this.data.data, 'paciente/solicitar/examen' ,'post', false);
    let response = await this.api.response;
    this.examenSolicitado = response.data.examen;
  }

  async realizarExamen(){
    // console.log(JSON.stringify(this.examenSolicitado));
    this.examenCrearForm.value['examenID'] = this.examenSolicitado.examenID;
    this.examenCrearForm.value['titulo'] = this.data.data.titulo;
    let examenResuelto = {"examen": this.examenCrearForm.value, "paciente": this.examenCrearForm.value.paciente};
    console.log("Examen resuelto!\n");
    console.log(examenResuelto);
    this.api.response = this.api.anyRequest(examenResuelto, 'paciente/examen' ,'post', false);
    let response = await this.api.response;
    alert(response.data.message);
    this.router.navigate(['/inicio']);
  }

  preguntas(): FormArray {
    return this.examenCrearForm.get("preguntas") as FormArray;
  }

  respuestas(preguntaIndex: number): FormArray {
    return this.preguntas().at(preguntaIndex).get("respuestas") as FormArray;
  }

  getPreguntas() {
    for(const pregunta of this.examenSolicitado.preguntas){
      this.preguntas().push(
        this.fb.group({
          preguntaID: [pregunta.preguntaID],
          pregunta: [pregunta.pregunta],
          respuestas: this.fb.array(this.getRespuestas(pregunta), Validators.required)
        })
      )
    }
  }

  getRespuestas(pregunta: any): Array<FormGroup> {
    let MyRespuestas = []; //no entiendo TS por lo que no se porque asocia respuestas en el formbuilder con este...
    // {value: respuesta.respuesta, disabled: true} no funciona...
    for(const respuesta of pregunta.respuestas){
      MyRespuestas.push(
        this.fb.group({
          respuestaID: [respuesta.respuestaID],
          respuesta: [respuesta.respuesta, Validators.required], 
          seleccion: [respuesta.seleccion],
          respuestaDeUsuario: [false, Validators.required]
        })
      )
    }
    return MyRespuestas;
  }
 
}
