import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Protein } from '../models/protein.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProteinService {
  url: string = `${environment.apiUrl}/proteins`;

  constructor(private http: HttpClient) {}

  getAllProteins(): Observable<Protein[]> {
    return this.http.get<Protein[]>(this.url);
  }
}
