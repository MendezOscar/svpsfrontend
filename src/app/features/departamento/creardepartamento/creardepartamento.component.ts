import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/Departamento';
import { Router } from '@angular/router';
import { DepartamentoService } from 'src/app/services/departamento/departamento.service';

@Component({
  selector: 'app-creardepartamento',
  templateUrl: './creardepartamento.component.html',
  styleUrls: ['./creardepartamento.component.css']
})
export class CreardepartamentoComponent implements OnInit {
  departamento: Departamento;
  nombre: string;

  constructor(private router: Router, private departamentoService: DepartamentoService) { }

  ngOnInit() {
  }

  crearDepartamento() {
    this.departamento = new Departamento();
    this.departamento.nombre = this.nombre;
    if (this.departamento) {
      this.departamentoService.createDepartamento(this.departamento).subscribe(() => {
        this.router.navigate(['/departamentos']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/departamentos']);
  }

}
