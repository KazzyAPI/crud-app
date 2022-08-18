import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../../model/api.response';
import { Patient } from '../../model/patient.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl+'/api/patients/';

  
// Getter functions for the services

  getPatients() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getPatientById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createPatient(patient: Patient): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, patient);
  }

  updatePatient(id: number, patient: Patient): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + patient.id, patient);
  }

  deletePatient(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
