import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './features/navigation/navigation.component';
import { BonosComponent } from './features/bono/bonos/bonos.component';
import { DepartamentosComponent } from './features/departamento/departamentos/departamentos.component';
import { DeduccionesComponent } from './features/deduccion/deducciones/deducciones.component';
import { EmpleadosComponent } from './features/empleado/empleados/empleados.component';
import { PlanillasComponent } from './features/planilla/planillas/planillas.component';
import { PuestosComponent } from './features/puesto/puestos/puestos.component';
import { CrearbonoComponent } from './features/bono/crearbono/crearbono.component';
import { EditbonoComponent } from './features/bono/editbono/editbono.component';
import { CreardeduccionComponent } from './features/deduccion/creardeduccion/creardeduccion.component';
import { EditardeduccionComponent } from './features/deduccion/editardeduccion/editardeduccion.component';
import { EditardepartamentoComponent } from './features/departamento/editardepartamento/editardepartamento.component';
import { CreardepartamentoComponent } from './features/departamento/creardepartamento/creardepartamento.component';
import { CrearpuestoComponent } from './features/puesto/crearpuesto/crearpuesto.component';
import { EditarpuestoComponent } from './features/puesto/editarpuesto/editarpuesto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    BonosComponent,
    DepartamentosComponent,
    DeduccionesComponent,
    EmpleadosComponent,
    PlanillasComponent,
    PuestosComponent,
    CrearbonoComponent,
    EditbonoComponent,
    CreardeduccionComponent,
    EditardeduccionComponent,
    EditardepartamentoComponent,
    CreardepartamentoComponent,
    CrearpuestoComponent,
    EditarpuestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
