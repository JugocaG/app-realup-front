import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = ['https://shielded-waters-57044-1dfb83ef6590.herokuapp.com/'];

@Injectable({
  providedIn: 'root',
})
export class BrandAmbassadorService {
  constructor(private http: HttpClient, private service: AuthService) {}

  saveSaleBrandAmbassador(signupRequest: any): Observable<any> {
    return this.http.post(
      BASE_URL + 'api/v1/brand-ambassador/save-sale',
      signupRequest,
      {
        headers: this.service.createAuthorizationHeader(),
      }
    );
  }
}
