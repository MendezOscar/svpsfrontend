import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { BonosComponent } from './features/bono/bonos/bonos.component';
import { DeduccionesComponent } from './features/deduccion/deducciones/deducciones.component';
import { DepartamentosComponent } from './features/departamento/departamentos/departamentos.component';
import { CrearbonoComponent } from './features/bono/crearbono/crearbono.component';
import { EditbonoComponent } from './features/bono/editbono/editbono.component';
import { EditardeduccionComponent } from './features/deduccion/editardeduccion/editardeduccion.component';
import { CreardeduccionComponent } from './features/deduccion/creardeduccion/creardeduccion.component';
import { CreardepartamentoComponent } from './features/departamento/creardepartamento/creardepartamento.component';
import { EditardepartamentoComponent } from './features/departamento/editardepartamento/editardepartamento.component';
import { PuestosComponent } from './features/puesto/puestos/puestos.component';
import { EditarpuestoComponent } from './features/puesto/editarpuesto/editarpuesto.component';
import { CrearpuestoComponent } from './features/puesto/crearpuesto/crearpuesto.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'bono', component: BonosComponent},
  {path: 'deducciones', component: DeduccionesComponent},
  {path: 'departamentos', component: DepartamentosComponent},
  {path: 'crearbono', component: CrearbonoComponent},
  {path: 'editarbono/:id', component: EditbonoComponent},
  {path: 'creardeduccion', component: CreardeduccionComponent},
  {path: 'editardeduccion/:id', component: EditardeduccionComponent},
  {path: 'creardepartamento', component: CreardepartamentoComponent},
  {path: 'editardepartamento/:id', component: EditardepartamentoComponent},
  {path: 'puestos', component: PuestosComponent},
  {path: 'crearpuesto', component: CrearpuestoComponent},
  {path: 'editarpuesto/:id', component: EditarpuestoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
