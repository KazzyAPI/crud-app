import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient} from '../../../model/patient.model';
import { PatientService } from '../../service/patient.service';
import { ApiResponse } from '../../../model/api.response';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  id: number;
  patient: Patient;
  apiResponse:ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
    private patientService: PatientService) { }

  ngOnInit() {
    this.patient = new Patient();

    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id)
      .subscribe(data => {
        console.log(data)
        this.patient = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.patientService.updatePatient(this.id, this.patient)
      .subscribe(data => console.log(data), error => console.log(error));
    this.patient = new Patient();
    this.router.navigate(['/add']);
    }

  
  list(){
    this.router.navigate(['/patients']);
  }
}