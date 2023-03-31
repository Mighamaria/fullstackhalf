import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { EmployeRegService } from './employe-reg.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeRegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
