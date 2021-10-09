import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.scss']
})
export class UsuarioCrearComponent{
  usuarioCrearForm =  this.fb.group({
    email: ['ejemplo@ddd.com', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    especialista: ['', [Validators.required]]
  });

  constructor(private api: APIServiceService,
    private router: Router,
    private fb: FormBuilder)
    { }

  async createUser(){
    this.api.response = this.api.anyRequest(this.usuarioCrearForm.value, '/especialista/usuario', 'post', true);
    let response = await this.api.response;
    alert(response.data.message);
    this.router.navigate(['/admin/usuario']);
  }    

}
