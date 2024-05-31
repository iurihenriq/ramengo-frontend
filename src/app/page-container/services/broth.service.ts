import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Broth } from '../models/broth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrothService {
  url: string = `${environment.apiUrl}/broths`;

  constructor(private http: HttpClient) {}

  getAllBroths(): Observable<Broth[]> {
    return this.http.get<Broth[]>(this.url);
  }
}
