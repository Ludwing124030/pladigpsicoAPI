import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.scss']
})
export class AgendarCitaComponent implements OnInit {
  citaCrearForm = this.fb.group({
    primer_nombre: ['', [Validators.required, Validators.maxLength(20)]],
    segundo_nombre: ['', [Validators.required, Validators.maxLength(20)]],
    primer_apellido: ['', [Validators.required, Validators.maxLength(20)]],
    segundo_apellido: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.required]],
    telefono: ['', [Validators.required, Validators.maxLength(12)]],
    comentario: ['', [Validators.required, Validators.maxLength(255)]],
    horario: ['', [Validators.required]]
  })

  cita: any;
  horarios: Array<any> = [];

  constructor(private api: APIServiceService,
    private router: Router,
    private fb: FormBuilder)
    { 
      this.getHorarios();      
    }


  ngOnInit(): void {
  }

  async getHorarios(){
    this.api.response = this.api.anyRequest('', '/paciente/horario', 'get', false);
    // this.api.response.then(r => this.horarios = r.data.listaDeHorarios);
    let response = await this.api.response;
    this.horarios = response.data.listaDeHorarios;
    console.log("inside async, Horarios: " + JSON.stringify(this.horarios));
  }

  async crearCita(){
    let myCita = {
      'paciente': {
        'primer_nombre': "",
        'segundo_nombre': "",
        'primer_apellido': "",
        'segundo_apellido': "",
        'email': "",
        'telefono': 0
      },
      'comentario': "",
      'horario': ""
    }

    myCita['paciente']['primer_nombre'] = this.citaCrearForm.value['primer_nombre'];
    myCita['paciente']['segundo_nombre'] = this.citaCrearForm.value['segundo_nombre'];
    myCita['paciente']['primer_apellido'] = this.citaCrearForm.value['primer_apellido'];
    myCita['paciente']['segundo_apellido'] = this.citaCrearForm.value['segundo_apellido'];
    myCita['paciente']['email'] = this.citaCrearForm.value['email'];
    myCita['paciente']['telefono'] = this.citaCrearForm.value['telefono'];
    myCita['comentario'] = this.citaCrearForm.value['comentario'];
       
    // pasar el objeto horario al formulario no funciona siempre tira [object Object]
    // myCita['horario'] = JSON.stringify(this.citaCrearForm.value['horario']);
    myCita['horario'] = this.horarios.find(h => h.horarioID = this.citaCrearForm.value['horario']);
    
    console.log("despues de buscar el ID con myCita['horario']: " + JSON.stringify(myCita['horario']));
    console.log(JSON.stringify(myCita));
    // console.log('horario: ' + JSON.stringify(myCita['horario']));
    // console.log('horarioID: ' + myCita['horario']['horarioID']);
    this.api.response = this.api.anyRequest(myCita, '/paciente/cita', 'post', false);
    let response = await this.api.response;
    alert(response.data.message);
    this.router.navigate(['/inicio']);

  }
}
