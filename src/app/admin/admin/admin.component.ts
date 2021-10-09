import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent{

  constructor(private auth: AuthService,
    private router: Router) { }

  logout(){
    if(this.auth.validarJWT()){
      try{
        localStorage.removeItem("JWT");
        alert("Sesion cerrada!");
        this.router.navigate(['/login']);
      }catch (error){
        alert("Error al intentar cerrar sesion...");
      }
    }else{
      //validarJWT lo redirecciona a login
      alert("La sesion ha expirado... ")
    }
    
  }

  

}
