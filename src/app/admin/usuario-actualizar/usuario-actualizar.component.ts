import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';
import {Usuario} from '../usuario/usuario.component';

@Component({
  selector: 'app-usuario-actualizar',
  templateUrl: './usuario-actualizar.component.html',
  styleUrls: ['./usuario-actualizar.component.scss']
})
export class UsuarioActualizarComponent {
  usuarioActualizarForm =  this.fb.group({
    campo: ['', [Validators.required]],
    nuevoValor: ['', [Validators.required]]
  });

  
  usuario: Usuario;
  campos = ['email', 'password', 'especialista'];
  
  constructor(private api: APIServiceService,
    private router: Router,
    private fb: FormBuilder,
    private data: DataParaActualizarService) { 
      this.usuario = data.data;
    }
  
  async actualizarUsuario(){
    console.log(JSON.stringify(this.usuarioActualizarForm.value));
    let campoActualizado = this.usuarioActualizarForm.value;
    campoActualizado.usuarioID = this.usuario.usuarioID;
    this.api.response = this.api.anyRequest(this.usuarioActualizarForm.value, '/especialista/usuario', 'put', true);
    let response = await this.api.response;
    alert(response.data.message);
    this.router.navigate(['/admin/usuario']);
  }


}
