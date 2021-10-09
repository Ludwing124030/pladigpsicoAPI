import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';


@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.scss']
})
export class ExamenesComponent implements OnInit {
  examenes: Array<any> = [];


  constructor(private api: APIServiceService, 
    private router: Router,
    private data: DataParaActualizarService) { 
  }

  ngOnInit(): void {
    this.getExamenes();
  }

  trackByExamenID(index: number, examen: any){
    return examen.examenID;
  }

  getExamenes(){
    this.api.response = this.api.anyRequest("", "especialista/new-cr/examen", "get", true);
    this.api.response.then(r => this.examenes = r.data.listaDeExamenes);
  }

  async obtenerExamenes(){
    this.api.response = this.api.anyRequest("", "especialista/new-cr/examen", "get", true);
    let response = await this.api.response;
    this.examenes = response.data.listaDeExamenes;
  }

  async deleteExamen(examenID: number){
    let examen: any | undefined = this.examenes?.find(e => e.examenID === examenID);
    if(confirm("Seguro que quiere eliminar este examen?\n" + 
      JSON.stringify(examen)
    )){
      this.api.response = this.api.anyRequest('', 'especialista/examen/' + examenID.toString(), 'delete', true);
      let response = await this.api.response;
      alert(response.data.message);
      this.examenes = [];
      this.obtenerExamenes();
      this.router.navigate(['admin/examenes']);
    }else{
      alert('No pues!');
    }
  }

  updateExamen(examen: any){
    if(examen !== null){
      this.data.data = examen;
      this.router.navigate(['/admin/examenes/actualizar']);
    }
  }

  createExamen(){
    this.router.navigate(['/admin/examenes/crear']);
  }
}
