import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

// export interface UsuarioCredenciales {
//   usuario: string;
//   password: string;
// }

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // redirectUrl: string | null = null;
  //JWT: string | null = null;
  
  constructor(private router: Router) { }
  
  validarJWT(): boolean {
    try{
      let JWT = localStorage.getItem("JWT");
      //Si no valido que sea null Ts tira error en los metodos de jwtHelper.
      if(JWT == null){
        this.router.navigate(['/login']);
        return false;
      }

      //JSON.parse(atob(JWT.split('.')[1]));
      let decodedJWT = jwtHelper.decodeToken(JWT);
      let validIss = decodedJWT.iss === 'pladigpsico:web_service';
      // StackOverflow recomienda utilizar jsonwebtoken.verify pero eso es para el backend porque la firma es un hash
      let isExpired = jwtHelper.isTokenExpired(JWT);

      if(!validIss && !isExpired) {
        this.router.navigate(['/login']);
        return false;
      }else{
        return true;
      }
      
    }catch(error){

    }
    
    return false;
  }
  

}
