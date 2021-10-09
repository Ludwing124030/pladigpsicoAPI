import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios, { AxiosResponse } from 'axios';

import { AuthService } from './auth/auth.service';

export type metodoHTTP = "post" | "put" | "get" | "delete";

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  //axios regresa una promise...
  response: AxiosResponse<any> | Promise<any> | string = ""; 
  
  constructor(private http: HttpClient, private authService: AuthService) { }

  async anyRequest(body: any, serviceUrl: string, metodo: metodoHTTP, authRequired: boolean ){
    try{
      
      //talvez utilizar config?
      //validar en otro servicio si la auth es valida.
      //data solo recibe objetos no JSON.stringify...
      const response = await axios({
        method: metodo,
        baseURL: 'https://api.pladigpsico.tech',
        url: serviceUrl,
        data: body,
        headers: authRequired ? {
          'Content-Type': 'application/json',
          'Authorization': this.authService.validarJWT() ? 'Bearer ' + localStorage.getItem("JWT") : "",
          } : {},
        timeout: 5000
      }); //era esta linea la que me faltaba??
      return response;
    }catch (error)
    {
      //Ts marca error como desconocido por lo que no puedo acceder a los miembros del error de axios. 
      // Queda pendiente el manejo.
      console.log(error);
      alert("Error en la peticion, asegure sus credenciales y/o los datos ingresados.");
      return "La peticion ha fallado...";  
    }
    
    
  }
}

