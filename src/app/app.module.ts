import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SampleModelComponent } from './components/sample-model/sample-model.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddSampleModelComponent } from './components/add-sample-model/add-sample-model.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AccountOperationComponent } from './components/account-operation/account-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleModelComponent,
    NavbarComponent,
    AddSampleModelComponent,
    AccountOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
