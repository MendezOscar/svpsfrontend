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
import { UsersComponent } from './features/user/users/users.component';
import { CrearusersComponent } from './features/user/crearusers/crearusers.component';
import { EditarusersComponent } from './features/user/editarusers/editarusers.component';
import { EmpleadosComponent } from './features/empleado/empleados/empleados.component';
import { CrearempleadoComponent } from './features/empleado/crearempleado/crearempleado.component';
import { EditarempleadoComponent } from './features/empleado/editarempleado/editarempleado.component';
import { PlanillaService } from './services/planilla/planilla.service';
import { HomeuserComponent } from './features/homeuser/homeuser/homeuser.component';
import { PlanillasComponent } from './features/planilla/planillas/planillas.component';
import { PlaanillauserComponent } from './features/planilla/plaanillauser/plaanillauser.component';
import { CrearplanillaComponent } from './features/planilla/crearplanilla/crearplanilla.component';
import { VerplanillaComponent } from './features/planilla/verplanilla/verplanilla.component';
import { ReportescargosComponent } from './features/empleado/reportescargos/reportescargos.component';
import { ReportessexoComponent } from './features/empleado/reportessexo/reportessexo.component';
import { ReportessalarioComponent } from './features/empleado/reportessalario/reportessalario.component';


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
  {path: 'editarpuesto/:id', component: EditarpuestoComponent},
  {path: 'users', component: UsersComponent},
  {path: 'crearusuario', component: CrearusersComponent},
  {path: 'editarusuario/:id', component: EditarusersComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'crearempleado', component: CrearempleadoComponent},
  {path: 'editarempleado/:id', component: EditarempleadoComponent},
  {path: 'planillas', component: PlanillasComponent},
  {path: 'homeuser', component: HomeuserComponent},
  {path: 'planillauser', component: PlaanillauserComponent},
  {path: 'crearplanilla', component: CrearplanillaComponent},
  {path: 'verplanilla/:id', component: VerplanillaComponent},
  {path: 'empleadoxcargo', component: ReportescargosComponent},
  {path: 'empleadoxsexo', component: ReportessexoComponent},
  {path: 'empleadoxsalario', component: ReportessalarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
