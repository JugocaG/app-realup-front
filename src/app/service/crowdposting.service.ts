import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

const BASE_URL = ['https://shielded-waters-57044-1dfb83ef6590.herokuapp.com/'];

@Injectable({
  providedIn: 'root',
})
export class CrowdpostingService {
  constructor(private http: HttpClient, private service: AuthService) {}

  saveSaleCrowdposting(signupRequest: any): Observable<any> {
    return this.http.post(
      BASE_URL + 'api/v1/crowdposting/save-sale',
      signupRequest,
      {
        headers: this.service.createAuthorizationHeader(),
      }
    );
  }

  savePackageCrowdpostingInstagam(signupRequest: any): Observable<any> {
    return this.http.post(
      BASE_URL + 'api/v1/crowdposting/save-package-instagram',
      signupRequest,
      {
        headers: this.service.createAuthorizationHeader(),
      }
    );
  }

  savePackageCrowdpostingTikTok(signupRequest: any): Observable<any> {
    return this.http.post(
      BASE_URL + 'api/v1/crowdposting/save-package-tiktok',
      signupRequest,
      {
        headers: this.service.createAuthorizationHeader(),
      }
    );
  }
}
