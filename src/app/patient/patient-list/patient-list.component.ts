import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../model/patient.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientService } from 'src/app/service/patient.service';
import { ApiResponse } from 'src/model/api.response';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Observable<ApiResponse>;
  

  constructor(private patientService: PatientService, private router: Router) { };

  ngOnInit(): void {

    
   this.patientService.getPatients()
  
    }

}
