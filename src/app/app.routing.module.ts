import { FormularioComponent } from './components/formulario/formulario/formulario.component';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'formulario', pathMatch: 'full'
  },
  {
    path: 'formulario',
    loadChildren:  async ()=>{
        return(await import ('./components/formulario/formulario.module')).FormularioModule;
    }
  },
  {
    path: '**', redirectTo: 'formulario', pathMatch: 'full'
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
