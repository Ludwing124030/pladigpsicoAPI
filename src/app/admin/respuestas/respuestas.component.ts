import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';


@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.scss']
})
export class RespuestasComponent implements OnInit {
  respuestas: Array<any> = [];


  constructor(private api: APIServiceService, 
  private router: Router,
  private data: DataParaActualizarService) { 
  }

  ngOnInit(): void {
    this.getRespuestas();
  }

  trackByRespuestaID(index: number, respuesta: any){
    return respuesta.respuestaID;
  }

  getRespuestas(){
    this.api.response = this.api.anyRequest("", "especialista/examen/respuesta", "get", true);
    this.api.response.then(r => this.respuestas = r.data.listaDeRespuestas);
  }

  async obtenerRespuestas(){
    this.api.response = this.api.anyRequest("", "especialista/examen/respuesta", "get", true);
    let response = await this.api.response;
    this.respuestas = response.data.listaDeRespuestas;
  }

  async deleteRespuesta(respuesta: any){
    if(confirm("Seguro que quiere eliminar esta pregunta?\n" + 
      JSON.stringify(respuesta)
    )){
      this.api.response = this.api.anyRequest(respuesta, 'especialista/examen/respuesta', 'delete', true);
      let response = await this.api.response;
      alert(response.data.message);
      this.respuestas= [];
      this.obtenerRespuestas();
      this.router.navigate(['admin/respuestas']);
    }else{
      alert('No pues!');
    }
  }

  updateRespuesta(respuesta: any){
    if(respuesta !== null){
      this.data.data = respuesta;
      this.router.navigate(['/admin/respuestas/actualizar']);
    }
  }

  createRespuesta(){
    this.router.navigate(['/admin/respuestas/crear']);
  }



}
