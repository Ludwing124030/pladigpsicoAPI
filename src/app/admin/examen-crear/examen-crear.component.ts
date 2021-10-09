import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-examen-crear',
  templateUrl: './examen-crear.component.html',
  styleUrls: ['./examen-crear.component.scss']
})
export class ExamenCrearComponent implements OnInit {
  examenCrearForm = this.fb.group({
    titulo: ['', [Validators.required, Validators.maxLength(255)]],
    codigo: ['', [Validators.required]],
    habilitado: ['', [Validators.required]],
  })


  constructor(private api: APIServiceService,
    private router: Router,
    private fb: FormBuilder)
    { }

  ngOnInit(): void {
  }

  async createExamen(){
    this.api.response = this.api.anyRequest(this.examenCrearForm.value, '/especialista/new-cr/examen', 'post', true);
    let response = await this.api.response;
    alert(response.data.message);
    this.router.navigate(['/admin/examenes']);
  }

}
