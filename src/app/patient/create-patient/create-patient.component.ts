import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient.service';
import { Router } from "@angular/router";
import { Patient } from '../../../model/patient.model';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  // Create new Patient object
  patient:Patient = new Patient();

  // Set Submit to false on init
  submitted = false;
  constructor(private patientService:PatientService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.submitted = true;
    // Call the service function to save the patient
    this.patientService.createPatient(this.patient).subscribe(
      data => {
        console.log(data);
      }
    );

    this.patient = new Patient();
    this.router.navigate(['/patients']);

  }

}
