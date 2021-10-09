import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, CanActivateChild, CanLoad, RouterStateSnapshot, Route, NavigationExtras } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService,
    private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const url: string = state.url;
      return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
    }

  canLoad(route: Route): boolean {
      /**
       * para que era el url? Creo que era necesario para 
       * si uno queria ingresar a preguntas y no estaba loggeado
       * lo tira a login y luego a preguntas.
       */
      const url = `/${route.path}`;
      return this.checkLogin(url);
    }
  

  checkLogin(url: string): boolean {
    /**
     * Llama el metodo validJWT para validar la sesion. 
     * Si existe y es valido es permitido avanzar,
     * Si existe y esta vencido redireccionar a login 
     * igualmente si no existe el JWT. 
     *
     */


    // let token: string | null = localStorage.getItem("JWT");
    // if(token){return true;}

 
    // this.router.navigate(['/login']);
    // return false;
    if(!this.authService.validarJWT()){
      this.router.navigate(['/login']);
      return false;
    }else{
      return true;
    }
  }  

}
