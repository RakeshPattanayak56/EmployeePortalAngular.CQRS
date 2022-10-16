import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { WelcomeComponent } from './welcome/welcome.component';
import{MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    EmployeeComponent,
    WelcomeComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
