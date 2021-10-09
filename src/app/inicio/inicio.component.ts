import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  horaInicio="8:00";
  horaFinal="18:00";
  public phone='41991924';
  public mensaje='Hola, necesito información.'

  constructor() { }

  ngOnInit(): void {
  }

}
