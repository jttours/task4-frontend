import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddSampleModelComponent } from './components/add-sample-model/add-sample-model.component';
import { AccountOperationComponent } from './components/account-operation/account-operation.component'

const routes: Routes = [
  {
    path:'', component:AccountOperationComponent,
  },
  {
    path:'add-model', component:AddSampleModelComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
