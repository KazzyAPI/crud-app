import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';

const routes: Routes = [
  {path: '', redirectTo: '/patient', pathMatch: 'full'},
  { path: 'add', component: CreatePatientComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'update', component: UpdatePatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
