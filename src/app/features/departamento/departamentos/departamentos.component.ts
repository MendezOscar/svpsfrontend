import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/services/departamento/departamento.service';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/Departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  departamentos: Departamento[];

  constructor(private router: Router, private departamentoService: DepartamentoService) { }

  ngOnInit() {
    this.getDepa();
  }

  getDepa() {
    this.departamentoService.getDepartamento().subscribe(data => {
      this.departamentos = data;
      console.log(this.departamentos);
    });
  }

  deleteDepartamento(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.departamentoService.deleteDepartamento(id).subscribe(() => {
        this.getDepa();
      });
    }
  }

  crear() {
    this.router.navigate(['/creardepartamento']);
  }

  editar(id: number) {
    this.router.navigate(['/editardepartamento', id]);
  }

}
