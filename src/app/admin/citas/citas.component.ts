import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';


@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {
  /**
   * No es necesario manejar interfaces
   * porque si el backend envia un parametro inesperado
   * nunca se accede y si falta uno va a tronar el programa 
   * pero aunque haya una interfaz no va a evitar que truene jaja
   */
  citas: Array<any> = [];
  

  constructor(private api: APIServiceService, 
    private router: Router,
    private data: DataParaActualizarService) { 
  }

  ngOnInit(): void {
    this.getCitas();
  }

  trackByCitaID(index: number, cita: any){
    return cita.citaID;
  }

  getCitas(){
    this.api.response = this.api.anyRequest("", "/secretaria/cita", "get", true);
    this.api.response.then(r => this.citas = r.data.listaDeCitas);
  }

  async obtenerCitas(){
    this.api.response = this.api.anyRequest("", "/secretaria/cita", "get", true);
    let response = await this.api.response;
    this.citas = response.data.listaDeUsuarios;
  }

  //porque no enviar el objeto entero?
  updateCita(cita: any){
    // let cita = this.citas?.find(cita => cita.id = citaID);
    if (cita !== null){
      this.data.data = cita;
      this.router.navigate(['/admin/citas/actualizar']);
    }
    
  }
  
}
