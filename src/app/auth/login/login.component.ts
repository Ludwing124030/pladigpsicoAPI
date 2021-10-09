import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { APIServiceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  usuarioCredencialesForm = this.fb.group({
    usuario: ['ejemplo@gmail.com', Validators.required],
    password: ['su contraseña', Validators.required]
  });
  
  message = "Inicie sesion para acceder a funcionalidad de admin";
  // token: string = "";
  JWT: string = "";

  
  constructor(private authService: AuthService, 
    private api: APIServiceService,
    public router: Router, 
    private fb: FormBuilder) { 
  }


  async iniciarSesion() {

    this.api.response = this.api.anyRequest(this.usuarioCredencialesForm.value, 'login', 'post', false);
    // this.api.response.then(r => this.JWT = r.data.JWT);     
    let response = await this.api.response;
    this.JWT = response.data.JWT;
    console.log(this.JWT);
    localStorage.setItem("JWT", this.JWT);
    // console.log("Token: " + this.JWT);
    // console.log("LocalStorage JWT: " + localStorage.getItem("JWT"));

    if(this.authService.validarJWT()){
      this.router.navigate(['/admin']);
    }
    
    
  }

}
