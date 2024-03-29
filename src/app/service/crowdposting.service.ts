import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root'
})
export class CrowdpostingService {

  constructor(private http: HttpClient, private service: AuthService) {}

  saveSaleCrowdposting(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "api/v1/crowdposting/save-sale", signupRequest, {
      headers: this.service.createAuthorizationHeader()
    })
  }

  savePackageCrowdposting(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "api/v1/crowdposting/save-package", signupRequest, {
      headers: this.service.createAuthorizationHeader()
    })
  }
}
