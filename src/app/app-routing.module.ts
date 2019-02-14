import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssinmentcomponentComponent } from './assinmentcomponent/assinmentcomponent.component' 

const routes: Routes = [
  {
    path: 'getRequest',
    component: AssinmentcomponentComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'getRequest'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
