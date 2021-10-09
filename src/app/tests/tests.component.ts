import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../admin/data-para-actualizar.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

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
    this.api.response = this.api.anyRequest("", "/paciente/examen", "get", true);
    this.api.response.then(r => this.examenes = r.data.listaDeExamenes);
  }

  realizarExamen(examen: any){
    if(examen !== null){
      this.data.data = examen;
      this.router.navigate(['/realizar-test']);
    }
  }

}
