import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientService } from './service/patient.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CreatePatientComponent,
    UpdatePatientComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule

  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
