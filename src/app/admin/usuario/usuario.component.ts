import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';




export interface Usuario {
  usuarioID: number;
  email: string; //usuario === email en cuanto al login.
  especialista: boolean;
}


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuarios: Array<Usuario> | null = null;

  
  

  constructor(private api: APIServiceService, 
    private router: Router,
    private data: DataParaActualizarService) { 
  }

  ngOnInit(): void {
    this.getUsers();
  }

  trackByUsuarioID(index: number, usuario: Usuario){
    return usuario.usuarioID;
  }

  // Es util solo si existe un delete real nada mas.
  async getUsuarios(){
    this.api.response = this.api.anyRequest("", "/especialista/usuario", "get", true);
    let response = await this.api.response;
    this.usuarios = response.data.listaDeUsuarios;
  }

  // Esta funcion es para cuando se inicializa el componente. 
  getUsers(){
    this.api.response = this.api.anyRequest("", "/especialista/usuario", "get", true);
    this.api.response.then(r => this.usuarios = r.data.listaDeUsuarios);
  }

  updateUser(usuarioID: number){
    let usuario: Usuario | undefined = this.usuarios?.find(usuario => usuario.usuarioID === usuarioID);
    console.log(usuario);
    //sin try porque el api se encarga en caso el cuerpo sea indefinido.
    if (usuario !== null){
      this.data.data = usuario;
      this.router.navigate(['admin/usuario/actualizar']);
    }
  }

  async deleteUser(usuarioID: number){
    let usuario: Usuario | undefined = this.usuarios?.find(usuario => usuario.usuarioID === usuarioID);
    //agregar mensaje de confirmacion.
    if(confirm("Seguro que quiere eliminar a este usuario?\n" + JSON.stringify(usuario))){
      this.api.response = this.api.anyRequest('', '/especialista/usuario/' + usuarioID, 'delete', true);
      let response = await this.api.response;
      alert(response.data.message);
      this.usuarios = [];
      this.getUsuarios();
      this.router.navigate(['admin/usuario']);
    }else{
      alert('No pues!');
    }
    
  }

  createUser() {
    this.router.navigate(['admin/usuario/crear']);
  }
}
