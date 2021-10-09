import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {
  preguntas: Array<any> = [];
  idExamen:any;
  idPregunta:any;

  constructor(private api: APIServiceService, 
    private router: Router,
    private data: DataParaActualizarService) { 
  }
  
  ngOnInit(): void {
    this.getPreguntas();
  }

  trackByPreguntaID(index: number, pregunta: any){
    return pregunta.preguntaID;
  }

  getPreguntas(){
    this.api.response = this.api.anyRequest("", "especialista/new-cr/pregunta", "get", true);
    this.api.response.then(r => this.preguntas = r.data.listaDePreguntas);
  }

  async obtenerPreguntas(){
    this.api.response = this.api.anyRequest("", "especialista/new-cr/pregunta", "get", true);
    let response = await this.api.response;
    this.preguntas = response.data.listaDePreguntas;
  }

  async deletePregunta(pregunta: any){
    if(confirm("Seguro que quiere eliminar esta pregunta?\n" + 
      JSON.stringify(pregunta)
    )){
      this.api.response = this.api.anyRequest(pregunta, 'especialista/examen/pregunta', 'delete', true);
      let response = await this.api.response;
      alert(response.data.message);
      this.preguntas = [];
      this.obtenerPreguntas();
      this.router.navigate(['admin/preguntas']);
    }else{
      alert('No pues!');
    }
  }

  updatePregunta(pregunta: any){
    if(pregunta !== null){
      this.data.data = pregunta;
      this.router.navigate(['/admin/preguntas/actualizar',]);
    }
  }

  createPregunta(){
    this.router.navigate(['/admin/preguntas/crear']);
  }
}
