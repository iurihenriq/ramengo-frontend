import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IBroth } from '../models/broth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrothService {
  url: string = `${environment.apiUrl}/broths`;

  constructor(private http: HttpClient) {}

  getAllBroths(): Observable<IBroth[]> {
    return this.http.get<IBroth[]>(this.url);
  }
}
